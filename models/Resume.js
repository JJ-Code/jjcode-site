const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({

  experience: [
    {
      company: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ]
});

module.exports = mongoose.model('resume', ResumeSchema)