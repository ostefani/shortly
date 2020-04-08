import User from '../models/User';

export default async (name, pageSize, pageNum) => {
    try {
        const skip = pageSize * (pageNum - 1);
        const user = await User.findOne(
            { name },
            { links: { $slice: [skip, pageSize] } },
        );
        if (user) {
            const { links } = user;
            return { found: true, links };
        }
        return { found: true, links: [] };
    }
    catch (e) {
        console.log('Get links: ', e);
        return e;
    }
};
