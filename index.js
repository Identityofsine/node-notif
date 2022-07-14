require('dotenv').config();
const express = require('express')
const app = express()
const routes = require("./routes");
const mongoose = require('mongoose');
const connectDB = require('./db/db');
require('./notification/notificationListener')

app.disable("x-powered-by"); //idky you need this but you do
//setup middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

(async () => {
    await connectDB();
    // all of the script.... 
})();


app.use("/", routes);

const HOST = process.env.HOST
const PORT = process.env.PORT

app.listen(PORT, HOST, () => {
    console.log(`CPP API listening on ${HOST}:${PORT}`)
})
console.log(process.env.PORT)