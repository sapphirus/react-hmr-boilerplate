import { Router as expressRouter } from 'express';

const router = expressRouter();

router.get('/', (req, res) => {
  res.render('index', { app: {} });
});

export default router;
