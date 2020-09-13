const express = require('express');
const router = express.Router();
const axios = require('axios');
const { check, validationResult } = require('express-validator');
const Resume = require('../../models/Resume')
const About = require('../../models/About')



// @route    GET api/resume/me
// @desc     Get current reseume info
// @access   Public
router.get('/me',
  async (req, res) => {
    //grabbing resume info from db 
    try {
      const resume = await Resume.findOne({
        about: '5f5d884dc957a5b9fe8d0780'
      }).populate('about', 'experience');

      if (!resume) {
        return res.status(400).json({ msg: 'There is no resume experience' });
      }
      //if there is a user send it to front end
      res.json(resume);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


// @route    PUT api/profile/experience
// @desc     Add profile experience
// @access   Private
router.post('/experience', [
  check('experience', 'experience is required').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    //destructing the params from the post request
    const {
      experience
    } = req.body;


    try {
      let resume = new Resume({
        about: '5f5d884dc957a5b9fe8d0780',
        experience
      })

      await resume.save();

      res.json(resume);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);




module.exports = router;



// @route     Get api/about
// @desc      Test Route
// @access    Public

router.get('/', (req, res) => res.send('resume route'));