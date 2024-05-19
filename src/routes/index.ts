import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  console.log("process.env", process.env.ENV)
  res.json({ title: 'Express Sead' });
});

export default router;
