const mongoose = require('mongoose');

const AboutInfoSchema = new mongoose.Schema({
  summary: {
    type: String
  },
  skills: [
    {
      type: String
    }],
  techSkills: [
    {
      type: String
    }],
  personality: [
    {
      title: {
        type: String
      },
      tagline: {
        type: String
      },
      summary: {
        type: String
      },
    }
  ],
  productDefined: [
    {
      title: {
        type: String
      },
      quote: {
        type: String
      }
    }
  ],
  education: [
    {
      school: {
        type: String
      },
      date: {
        type: String
      },
      degree: [
        {
          type: String
        }
      ]
    }
  ],
  certification: [
    {
      name: {
        type: String
      }
    }]



})