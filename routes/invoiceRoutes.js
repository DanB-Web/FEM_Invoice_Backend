import express from 'express';
const router = express.Router();

import { protect } from '../middleware/authMiddleware.js';

import { allInvoices, deleteInvoice, createInvoice, editInvoice } from '../controllers/invoiceControllers.js';

router.get('/allInvoices', protect, allInvoices);
router.post('/createInvoice', protect, createInvoice);
router.put('/editInvoice', protect, editInvoice);
router.delete('/deleteInvoice/:id', protect, deleteInvoice);

export default router;
