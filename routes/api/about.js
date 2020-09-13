const express = require('express');
const router = express.Router();
const axios = require('axios');
const { check, validationResult } = require('express-validator');
const About = require('../../models/About')



// @route    GET api/about
// @desc     Get all about info
// @access   Public
router.get('/', async (req, res) => {
  try {
    const aboutInfo = await About.find().populate('about', ['_id','summary', 'skills', 'techSkills', 'personality', 'productDefined', 'education', 'certification']);
    res.json(aboutInfo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



// @route    POST api/about
// @desc     Create or update about info 
// @access   Private

router.post('/', [
  check('summary', 'Summary is required').not().isEmpty()
],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    //destructing the params from the post request 
    const {
      summary, skills, techSkills, personality, productDefined, education, certification
    } = req.body;

    try {
      //Build about obj to be put into db, creating new object  
     let about = new About({
        summary,
        skills,
        techSkills,
        personality,
        productDefined,
        education,
        certification
      })
      await about.save();

      //resolve the request with sending the about obj back

      console.log(about)
      res.json(about);

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
)

module.exports = router;


// @route     Get api/about
// @desc      Test Route
// @access    Public

// router.get('/', (req, res) => res.send('about route'));