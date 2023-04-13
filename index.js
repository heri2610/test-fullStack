const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const router = require('./app/routes');

dotenv.config();
const { PORT = 3001, } = process.env;

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log('server is running!');
});