const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config(); // Needed for .env file, things that shouldnt be public is there

const app = express(); // intial use for express
const port = process.env.port; // port is located in .env file
const uri = process.env.uri;
const connection = mongoose.connection;

app.use(cors());
app.use(express.json()); // needed cause files sent and recived are jsons ( for this project )

mongoose.connect(uri, {
  useNewUrlParser : true,
  useCreateIndex : true,
  useUnifiedTopology : true // Learn this dont forget, it removes an error dunno why
})

connection.once('open', () => {
  console.log('Database connection established sucesfully')
})

app.listen(port, () => {
  console.log('Backend server is running in : http://localhost:' + port)
})