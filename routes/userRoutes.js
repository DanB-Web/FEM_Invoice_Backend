import express from 'express';
const router = express.Router();

import { login, logout } from '../controllers/userControllers.js';

router.post('/login', login);
router.post('/logout', logout);

export default router;