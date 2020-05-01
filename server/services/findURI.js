import User from '../models/User';

export default async (uri, name) => {
    try {
        const { _id, links } = await User.findOne(
            { links: { $elemMatch: { shortURI: uri } } },
        );
        console.log('links: ', links);
        return { found: true, uri: links[0].longURI };
    }
    catch (e) {
        console.log('Find links: ', e);
        return e;
    }
};
