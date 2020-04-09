import User from '../models/User';

export default async (name, shortenURI, shortURI) => {
    try {
        const existingUser = await User.findOne({ name });
        if (!existingUser) {
            throw Error('Invalid input');
        }

        const existingShortURI = await User.findOne({ links: { $elemMatch: { shortURI } } });
        if (existingShortURI) {
            throw Error('The subpart is already taken');
        }

        const links = existingUser.links.map(e => (e.shortURI === shortenURI ? { ...e._doc, shortURI } : e._doc));
        existingUser.links = links;
        await existingUser.save();
        return { created: true, shortURI };
    }
    catch (e) {
        console.log('Post subpart: ', e);
        return e;
    }
};
