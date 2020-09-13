const mongoose = require('mongoose');

const AboutInfoSchema = new mongoose.Schema({
  summary: {
    type: String,
    require: true
  },
  skills: {
    type: [String],
    required: true
  },
  techSkills: {
    type: [String],
    required: true
  },
  personality: [
    {
      title: {
        type: String,
        required: true
      },
      tagline: {
        type: String
      },
      summary: {
        type: String,
        required: true
      },
    }
  ],
  productDefined: [
    {
      title: {
        type: String
      },
      quote: {
        type: String,
        required: true
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        required: true
      },
      dateRange: {
        type: String,
        required: true
      },
      degree: [
        {
          type: String,
          required: true
        }
      ]
    }
  ],
  certification: [
    {
      name: {
        type: String,
        required: true
      },
      dateRange: {
        type: String,
        required: true
      }

    }]
});

module.exports = mongoose.model('aboutInfo', AboutInfoSchema)