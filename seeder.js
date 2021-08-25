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

import { connectDB } from './config/database.js';

const user = { 
  name: 'John Doe',
  email: 'johndoe@email.com', 
  password: 'password'
}

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany()
    await User.create(user)
    console.log('Data imported'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
}

//CHANGE THIS TO ONLY REPLACE INVOICES
const importDataRemote = async () => {
  try {
    await User.deleteMany()
    await User.create(user)
    console.log('Data imported'.green.inverse);
    //process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    throw new Error('data reset seeder error')
    //process.exit(1);
  }
}

const destroyData = async () => {
  try { 
    await User.deleteMany();
    console.log('Data removed!'.green.inverse);
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