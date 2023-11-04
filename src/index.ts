import express from 'express';
import mongoose from 'mongoose';

import { router } from './routes';

mongoose
  //Connection to database
  .connect('mongodb://localhost:27017')
  .then(() => {
    //On successful database connection, run the API
    const app = express();

    app.use(express.json());
    app.use(router);

    app.listen(3001, () => {
      console.log('🚀 Server is running on http://localhost:3001');
    });
  })
  .catch(() => console.log('Error connecting to mongo'));
