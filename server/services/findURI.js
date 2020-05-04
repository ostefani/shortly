import { promisify } from 'util';
import redis from 'redis';
import User from '../models/User';

const client = redis.createClient({ host: process.env.REDIS_URI, port: process.env.REDIS_PORT });
client.get = promisify(client.get);

export default async uri => {
    try {
        const cacheValue = await client.get(uri);

        if (cacheValue) {
            return { found: true, uri: cacheValue };
        }

        const result = await User.aggregate([
            {
                $match: {
                    'links.shortURI': uri,
                },
            },
            {
                $project: {
                    _id: 0,
                    createdAt: 1,
                    links: {
                        $filter: {
                            input: '$links', as: 'link', cond: { $eq: ['$$link.shortURI', uri] },
                        },
                    },
                },
            },
        ]);

        if (result.length > 0) {
            const [{ createdAt, links }] = result;
            client.set(uri, links[0].longURI);
            client.expireat(uri, Math.ceil(+createdAt / 1000) + 86400);
            return { found: true, uri: links[0].longURI };
        }
        return { found: false };
    }
    catch (e) {
        console.log('Find links: ', e);
        return e;
    }
};
