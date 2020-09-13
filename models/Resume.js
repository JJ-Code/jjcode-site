const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  about: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'about'
  },
  experience: [
    {
      company: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: [String],
        required: true
      }
    }
  ]
});

module.exports = mongoose.model('resume', ResumeSchema)