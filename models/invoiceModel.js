import mongoose from 'mongoose';

const addressSchema = mongoose.Schema({
  street: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  postCode: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: false
  }
})

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
})

const invoiceSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  paymentDue: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  paymentTerms: {
    type: Number,
    required: true
  },
  clientName: {
    type: String,
    required: true
  },
  clientEmail: {
    type: String,
    required: false
  },
  status: {
    type: String,
    required: true
  },
  senderAddress: {
    type: addressSchema
  },
  clientAddress: {
    type: addressSchema
  },
  items: {
    type: [itemSchema]
  },
  total: {
    type: Number,
    required: true
  }
})

const Invoice = mongoose.model('Invoice', invoiceSchema);

export { Invoice };