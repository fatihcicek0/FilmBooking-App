import express, { Router } from 'express';
const router: Router = express.Router();
import authControllers from '../controllers/auth';

router.post('/register', authControllers.register);

router.post('/login', authControllers.login);

export = router;
