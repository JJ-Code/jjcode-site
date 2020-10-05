const express = require('express');
const router = express.Router();
const axios = require('axios');
const { check, validationResult } = require('express-validator');
const Testimonial = require('../../models/Testimonial')
const About = require('../../models/About')





// @route    GET api/testimonial/
// @desc     Get all current user testimonial info
// @access   Public
router.get('/',
  async (req, res) => {
    //grabbing resume info from db 
    try {

      const allTestimonial = await Testimonial.find().populate('about', 'people');

      if (!allTestimonial) {
        return res.status(400).json({ msg: 'There is no testimonial experience in db for any users' });
      }

      res.status(200).json({
        success: true,
        data: allTestimonial
      });

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });



// @route    GET api/testimonial/:id
// @desc     Get one current user reseume info
// @access   Public
router.get('/:id', async (req, res) => {
  //grabbing testimonial info from db
  console.log(req.params.id)
  try {

    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(400).json({ msg: 'There is no testimonials' });
    }

    console.log(testimonial.people);
    res.status(200).json({
      success: true,
      data: testimonial.people
    });

    //if there is a user send it to front end
    //res.json(resume);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// @route    Post api/resume/about id/experience
// @desc     Add resume experience
// @access   Private
router.post('/:id/testimonial', [
  check('testimonial', 'testimonial is required').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.params.id);
    //destructing the params from the post request
    const {
      experience
    } = req.body;


    try {
      let testimonial = await Testimonial.create({
        aboutID: req.params.id,
        people
      })
      //console.log(resume)

      //sending result to client 
      res.status(200).json({
        success: true,
        data: testimonial
      });

      //res.json(resume);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);



module.exports = router;


// @route     Get api/testimonial
// @desc      Test Route
// @access    Public

// router.get('/', (req, res) => res.send('testimonial route'));