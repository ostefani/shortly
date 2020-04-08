import express from 'express';
import validUrl from 'valid-url';
import shortid from 'shortid';
import postLinks from '../services/postLinks';
import findURI from '../services/findURI';

const baseURL = process.env.API + '/api/';
const router = express.Router();

router.route('/')
    .post(async (req, res) => {
        try {
            const name = req.session.user_sid;
            const { link } = req.body;

            if (!validUrl.isUri(link)) {
                return res.status(400).json({ error: 'Invalid url' });
            }

            const shortURL = shortid.generate();
            const result = await postLinks(name, link, `${baseURL}${shortURL}`, shortURL);

            if (result.created) {
                return res.json(result);
            }
            res.status(400).json({ error: 'Invalid input' });
        }
        catch (e) {
            console.log('Post link: ', e);
            return res.status(400).json('We run into problem, try again later');
        }
    });

router.route('/:shortURL')
    .get(async (req, res) => {
        try {
            const { shortURL } = req.params;
            const name = req.session.user_sid;
            const result = await findURI(`${baseURL}${shortURL}`, name);

            if (result.found) {
                return res.redirect(result.uri);
            }
            res.status(400).json({ error: 'Bad request' });
        }
        catch (e) {
            console.log('Redirect error: ', e);
            return res.status(400).json('We run into problem, try again later');
        }
    });

export default router;
