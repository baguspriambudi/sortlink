const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`listening on PORT ${PORT}`));
