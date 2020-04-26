import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import session from 'express-session';
import ConnectMongo from 'connect-mongo';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import postLinks from './routes/links';
import getPages from './routes/pages';

const MongoStore = ConnectMongo(session);

const app = express();
const PORT = process.env.PORT || 3001;
const { DB } = process.env;
console.log('PORT: ', PORT);
console.log('DB: ', DB);

const setSession = (req, res, next) => {
    if (!(req.session.user_sid && req.cookies.user_sid)) {
        const sid = Math.random().toString();
        req.session.user_sid = sid;
    }
    next();
};

console.log('FRONT: ', process.env.FRONT);

app.use(cors({
    origin: ['http://localhost:3000', process.env.FRONT],
    credentials: true,
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    name: 'user_sid',
    secret: 'foo',
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        touchAfter: 60 * 60 * 24,
    }),
    resave: false,  // create a new session even if error
    saveUninitialized: false,
    cookie: {
        // httpOnly: false, secure: false, maxAge: 60 * 60 * 24 * 1000, // 24 hours
        httpOnly: false, secure: false, maxAge: 60 * 60 * 24 * 1000, // 1 hour
    },
}));

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => console.log('connected to db')).catch(e => console.log('e: ', e));

app.use('/api/page', getPages);
app.use('/api', setSession, postLinks);

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));
// app.keepAliveTimeout = 0;
// app.headersTimeout = 65 * 1000;
