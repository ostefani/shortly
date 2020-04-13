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
const DB = process.env.DB_URL;

const setSession = (req, res, next) => {
    if (!(req.session.user_sid && req.cookies.user_sid)) {
        const sid = Math.random().toString();
        req.session.user_sid = sid;
    }
    next();
};

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
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    rolling: true,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: false, secure: false, maxAge: 60 * 1000, // 1 hour
    },
}));

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('connected to db')).catch(e => console.log('e: ', e));

app.use('/api', setSession, postLinks);
app.use('/api/page', setSession, getPages);

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));
// app.keepAliveTimeout = 0;
// app.headersTimeout = 65 * 1000;
