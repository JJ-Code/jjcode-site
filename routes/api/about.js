const express = require('express');
const router = express.Router();
const axios = require('axios');
const { check, validationResult } = require('express-validator');
const About = require('../../models/About');



// @route    GET api/about
// @desc     Get all about info
// @access   Public
router.get('/', async (req, res) => {
  try {
    const aboutInfo = await About.find().populate('about');
    res.json(aboutInfo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// @route    GET api/about
// @desc     Get one about info
// @access   Public
router.get('/:id', async (req, res) => {
  try {
    const aboutOne = await About.findById(req.params.id);
  
    //sending result to client 
    res.status(200).json({
      success: true,
      data: aboutOne
    });

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

    try {
      //Creating new about object 
      const about = await About.create(req.body);

      //sending about data to client after it is completed as payload
      res.status(201).json({
        success: true,
        data: about
      });


      console.log(about)


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