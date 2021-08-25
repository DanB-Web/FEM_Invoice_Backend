import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

import { readFile } from 'fs/promises';
const data = JSON.parse(
  await readFile(
    new URL('./data/data.json', import.meta.url)
  )
);

import { User } from './models/userModel.js';
import { Invoice } from './models/invoiceModel.js';

import { connectDB } from './config/database.js';

const user = { 
  name: process.env.USER_NAME,
  email: process.env.USER_EMAIL, 
  password: process.env.USER_PASSWORD
}

dotenv.config();
connectDB('seeder.js');

const importData = async () => {
  try {
    await User.deleteMany();
    await User.create(user);
    await Invoice.deleteMany();
    await Invoice.insertMany(data);
    console.log('Data imported locally'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
}

const importDataRemote = async () => {
  try {
    await Invoice.deleteMany();
    await Invoice.insertMany(data);
    console.log('Data reset remotely'.green.inverse);
  } catch (err) {
    console.error(`${err}`.red.inverse);
    throw new Error('data reset seeder error')
  }
}

const destroyData = async () => {
  try { 
    await User.deleteMany();
    await Invoice.deleteMany();
    console.log('Data removed locally'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
}

if (process.argv[2] === '-i') {
  importData();
}

if (process.argv[2] === '-d') { 
  destroyData();
} 


export { importDataRemote }