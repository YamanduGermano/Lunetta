const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config({ path: './.env' });

const dburi = process.env.DB_URI;

const PORT = 8000;
mongoose.connect(dburi)
  .then((result) => app.listen(PORT, () => console.log("Started at port " + PORT)))
  .catch((err) => console.log(err));

app.use(authRoutes);
