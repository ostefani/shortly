const { promisify } = require('util');
const express = require('express');
const next = require('next');
const redis = require('redis');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const client = redis.createClient({ host: 'redis', port: 6379 });
client.get = promisify(client.get);

const cachePage = async (req, res, pagePath) => {
    try {
        const cache = await client.get(pagePath);
        if (cache) {
            console.log('CACHE');
            res.setHeader('x-cache', 'HIT');
            return res.send(cache);
        }
        const html = await app.renderToHTML(req, res, pagePath);
        client.set(pagePath, html);
        return res.send(html);
    }
    catch (error) {
        console.log('cachePage: ', error);
    }
};

app.prepare().then(() => {
    const server = express();

    server.get('/a', (req, res) => {
        // return app.render(req, res, '/a', req.query);
        return new Error('Not found');
    });

    server.get('/', (req, res) => {
        return cachePage(req, res, '/');
    });

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
