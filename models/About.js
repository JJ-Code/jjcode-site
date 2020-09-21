const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  summary: {
    type: String,
    require: true
  },
  skills: [{
    skillType: {
      type: [String],
      required: true
    },
    value: {
      type: [String],
      required: true
    }
  }],
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
      }
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
      icon: {
        type: String,
        required: true
      },
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
      ],
      note: {
        type: String
      }
    }
  ],
  certification: [
    {
      name: {
        type: String,
      },
      dateRange: {
        type: String,
      }

    }]
});

module.exports = mongoose.model('about', AboutSchema)