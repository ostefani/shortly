import express from 'express';
import getPages from '../services/getPages';

const PAGE_SIZE = 10;
const router = express.Router();

router.route('/')
    .post(async (req, res) => {
        try {
            const name = req.session.user_sid;
            const { pageNum } = req.body;
            const result = await getPages(name, PAGE_SIZE, pageNum);

            if (result.found) {
                return res.json(result);
            }
            res.status(400).json({ error: 'Bad request' });
        }
        catch (e) {
            console.log('Redirect error: ', e);
            res.status(401).json('We run into problem, try again later');
        }
    });

export default router;
