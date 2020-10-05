const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  people: [{
    name: {
      type: String,
      require: true
    },
    image: {
      type: String,
      require: true
    },
    linkedin: {
      type: String,
      require: true
    },
    comment: {
      type: [String],
      required: true
    },
    jobTitle: {
      type: [String],
      required: true
    }
  }],
  aboutID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'about'
  }
});

module.exports = mongoose.model('testimonial', TestimonialSchema);


