import express from 'express';
const router = express.Router();

import { resetData } from '../controllers/dataController.js';

router.post('/reset', resetData);

export default router;