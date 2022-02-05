require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });


const db = mongoose.connection
db.on('error', (err) => console.error(err));
db.once('open', () => console.log("Connected to db"))

app.use(express.json())

const buyersRouter = require('./routes/buyers')

app.use('/buyers', buyersRouter)
app.listen(3000, () => console.log('Started'))