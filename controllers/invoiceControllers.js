import { Invoice } from '../models/invoiceModel.js';

export const allInvoices = async (req, res) => {
  try {
    const data = await Invoice.find({});
    res.status(200).send(data);
  } catch (e) {
    throw new Error('get invoices error');
  }
}

export const createInvoice = async (req, res) => {
  try {
    const id = req.body.id;
    const check = await Invoice.find({id});
    if (check.length !== 0) {
      res.status(409).json({message: 'id already in use'})
    } else {
      const data = await Invoice.create(req.body);
      res.status(201).send(data);
    }
  } catch (e) {
    throw new Error('create invoice error')
  }
}

export const editInvoice = async (req, res) => {
  try {
    const id = req.body.id;
    const data = await Invoice.findOneAndUpdate({id}, req.body, {new:true});
    res.status(201).send(data);
  } catch (e) {
    throw new Error('edit invoice error');
  }
}

export const deleteInvoice = async (req, res) => {
  try {
    const id = req.params.id;
    await Invoice.deleteOne({id});
    res.sendStatus(204);
  } catch (e) {
    throw new Error('delete invoice error');
  }
}