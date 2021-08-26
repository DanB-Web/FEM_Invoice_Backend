import express from 'express';
const router = express.Router();

import { allInvoices, deleteInvoice, createInvoice, editInvoice } from '../controllers/invoiceControllers.js';

router.get('/allInvoices', allInvoices);
router.post('/createInvoice', createInvoice);
router.put('/editInvoice', editInvoice);
router.delete('/deleteInvoice/:id', deleteInvoice);

export default router;
