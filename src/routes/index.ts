import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

router.get('/hello', (req: Request, res: Response) => {
    res.send('Hello from /hello route!');
});

export default router;
