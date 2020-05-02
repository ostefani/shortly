const { promisify } = require('util');
import User from '../models/User';
const redis = require('redis');
const client = redis.createClient({ host: 'redis', port: 6379 });
client.get = promisify(client.get);
// const redisClient = require('redis').createClient;
// const redis = redisClient(6379, 'localhost');
// redis.get = promisify(redis.get);

export default async uri => {
    console.log('uri: ', uri);
    try {
        const cacheValue = await client.get(uri);
        console.log('cacheValue: ', cacheValue);
        if (cacheValue) {
            return { found: true, uri: cacheValue };
        }
        const { links } = await User.findOne(
            { 'links.shortURI': uri },
            { links: { $elemMatch: { shortURI: uri } } },
        );
        client.set(uri, links[0].longURI, 'EX', 60 * 60 * 24);
        console.log('links: ', links[0].longURI);
        return { found: true, uri: links[0].longURI };
    }
    catch (e) {
        console.log('Find links: ', e);
        return e;
    }
};
