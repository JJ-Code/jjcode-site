const express = require('express');
const router = express.Router();
const axios = require('axios');
const { check, validationResult } = require('express-validator');
const Resume = require('../../models/Resume')
const About = require('../../models/About')



// @route    GET api/resume/
// @desc     Get all current user reseume info
// @access   Public
router.get('/',
  async (req, res) => {
    //grabbing resume info from db 
    console.log(req.params.id)
    try {

      const resume = await Resume.find().populate('about', 'experience');

      if (!resume) {
        return res.status(400).json({ msg: 'There is no resume experience in db for any users' });
      }
      //if there is a user send it to front end
      res.json(resume);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });



// @route    GET api/resume/:aboutID
// @desc     Get one current user reseume info
// @access   Public
router.get('/:aboutID',
  async (req, res) => {
    //grabbing resume info from db 
    console.log(req.params.id)
    try {

      const resume = await Resume.findOne({ aboutID: req.params.aboutID }).populate('about', 'experience');

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

// @route    Post api/resume/about id/experience
// @desc     Add resume experience
// @access   Private
router.post('/:id/experience', [
  check('experience', 'experience is required').not().isEmpty()],
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
      let resume = await Resume.create({
        aboutID: req.params.id,
        experience
      })
      //console.log(resume)

      //sending result to client 
      res.status(200).json({
        success: true,
        data: resume
      });

      //res.json(resume);
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

//router.get('/', (req, res) => res.send('resume route'));