import User from '../models/User';

export default async (name, shortenURI, shortURI) => {
    try {
        const existingUser = await User.findOne({ name });
        if (!existingUser) {
            throw Error('Invalid input');
        }

        const existingShortURI = await User.findOne({ links: { $elemMatch: { shortURI: shortenURI } } });
        console.log('existingShortURI: ', existingShortURI);
        if (existingShortURI) {
            throw Error('The subpart is already taken');
        }

        existingUser.links.shortURI = shortURI;
        await existingUser.save();
        return { created: true, shortURI };
    }
    catch (e) {
        console.log('Post subpart: ', e);
        return e;
    }
};
