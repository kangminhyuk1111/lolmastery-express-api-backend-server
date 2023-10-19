// routes/userRoutes.ts

import express from 'express';
import { UserController } from '../controller/controller';

const router = express.Router();

router.get('/',UserController.helloUser)
router.get('/user', UserController.getUser);
router.put('/user', UserController.updateUser);

export default router;