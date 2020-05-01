import User from '../models/User';

export default async uri => {
    try {
        const { links } = await User.findOne(
            { 'links.shortURI': uri },
            { links: { $elemMatch: { shortURI: uri } } },
        );
        return { found: true, uri: links[0].longURI };
    }
    catch (e) {
        console.log('Find links: ', e);
        return e;
    }
};
