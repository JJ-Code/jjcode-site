const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const dotenv = require('dotenv');
const colors = require('colors');


// Load env vars
dotenv.config({ path: './config/config.env' });

//Connect to database
connectDB();


//initatlize express
const app = express();



// Init Middleware -vBody parser
app.use(express.json());


//Test Route
app.get('/', (req, res) => res.send('api running'));

//port info
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV}  mode on port ${PORT}!`.yellow.bold);
});


// Handle unhandled promise rejections for all 
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});