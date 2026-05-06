require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json());

app.use('/auth', require('./routes/authRoutes'));
app.use('/eventos', require('./routes/eventoRoutes'));

app.listen(process.env.PORT, () => {
  console.log("Servidor rodando");
});
