import User from '../models/User';

export default async (name, link, shortURI, shortURL) => {
    try {
        const existingUser = await User.findOne({ name });
        if (!existingUser) {
            const user = new User({
                name,
                links: [
                    {
                        longURI: link,
                        shortURI,
                    },
                ],
            });
            await user.save();
            return { created: true, shortURI };
        }
        existingUser.links = [...existingUser.links, {
            longURI: link,
            shortURI,
        }];
        await existingUser.save();
        return { created: true, shortURI };
    }
    catch (e) {
        console.log('Post links: ', e);
        return e;
    }
};
