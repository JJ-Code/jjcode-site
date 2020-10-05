const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: '../config/config.env' });

// Load models
const About = require('../models/About');
const Resume = require('../models/Resume');
const Testimonial = require('../models/Testimonial');

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});


// Read JSON files
const about = JSON.parse(
  fs.readFileSync(`${__dirname}/about.json`, 'utf-8')
);

const resume = JSON.parse(
  fs.readFileSync(`${__dirname}/resume.json`, 'utf-8')
);

const testimonial = JSON.parse(
  fs.readFileSync(`${__dirname}/testimonial.json`, 'utf-8')
);




// Import into DB
const importData = async () => {
  try {
    await About.create(about);
    await Resume.create(resume);
    await Testimonial.create(testimonial);
    console.log('Data Imported...'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};



// Delete data
const deleteData = async () => {
  try {
    await About.deleteMany();
    await Resume.deleteMany();
    await Testimonial.deleteMany();
    console.log('Data Destroyed...'.red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

//example: node seeder -import (node is at process.argv[0], seeder is at process.argv[1], -import is at process.argv[2])
if (process.argv[2] === '-import') {
  importData();
} else if (process.argv[2] === '-delete') {
  deleteData();
}
