import User from '../models/User';

export default async (uri, name) => {
    try {
        const { _id, links } = await User.findOne(
            { name },
            { links: { $elemMatch: { shortURI: uri } } },
        );
        return { found: true, uri: links[0].longURI };
    }
    catch (e) {
        console.log('Find links: ', e);
        return e;
    }
};
