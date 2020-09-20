const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  experience:
    [{
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
      },
      dateRange: {
        type: [String],
        required: true
      }
    }],
  aboutID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'about'
  }
});

module.exports = mongoose.model('resume', ResumeSchema)