const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 5000;
const app = express();

const shortUrlRoutes = require('./routes/route_shorturl');

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('mongodb connected'))
  .catch((err) => {
    console.log(err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/create', shortUrlRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'system cashier service up and running',
    environment: process.env.NODE_ENV,
    timestamp: new Date(),
  });
});

app.listen(PORT, console.log(`listening on PORT ${PORT}`));
