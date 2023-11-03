import express from 'express';
import mongoose from 'mongoose';

mongoose
  //Connection to database
  .connect('mongodb://localhost:27017')
  .then(() => {
    //On successful database connection, run the API
    const app = express();

    app.listen(3001, () => {
      console.log('🚀 Server is running on http://localhost:3001');
    });
  })
  .catch(() => console.log('Erro ao conectar ao mongo'));
