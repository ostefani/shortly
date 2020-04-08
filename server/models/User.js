import mongoose, { Schema } from 'mongoose';

const URISchema = new Schema({
    longURI: {
        type: String,
    },
    shortURI: {
        type: String,
    },
});

const userSchema = new Schema({
    name: {
        type: String,
    },
    links: [URISchema],
});

export default mongoose.model('User', userSchema);
