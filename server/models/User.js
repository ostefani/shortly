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
    /*createdAt: {
        type: Date,
        default: Date.now,
        expires: 60, // 60 sec
        index: true,
    },*/
    createdAt: {
        type: Date,
        index: true,
        expires: 60 * 60 * 24, // 24 hour
    },
}, {
    timestamps: true,
});

export default mongoose.model('User', userSchema);
