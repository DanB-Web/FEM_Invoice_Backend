import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import morgan from 'morgan';
import colors from 'colors';

//ROUTES
import userRoutes from './routes/userRoutes.js';
import dataRoutes from './routes/dataRoutes.js';

import { errorHandler } from './middleware/errorMiddleware.js';

import { connectDB } from './config/database.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const isProduction = process.env.NODE_ENV === 'production';

app.use(
  cors(),
  express.json()
);

//SERVER LOGGING
isProduction ? 
  app.use(morgan('common')):
  app.use(morgan('dev'));

//ROUTES
app.use('/user', userRoutes);
app.use('/data', dataRoutes);

//ERROR HANDLING
app.use(errorHandler);

(async function () {
 try {
    await connectDB('server.js');
    app.listen(PORT, () => {
      console.log(`Listening in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold);
    })
  } catch (err) {
      console.log(`Failure to start server: ${err}`.red.bold);
  }
})();
