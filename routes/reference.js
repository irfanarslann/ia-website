const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const Reference = require('../model/Reference');
// @route     GET api/reference
// @desc      Get References
// @access    Public
router.get('/', async (req, res) => {
  try {
    const references = await Reference.find({});
    res.json(references);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
});

// @route     POST api/reference
// @desc      Add new Reference
// @access    Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Reference name is required').not().isEmpty(),
      check('link', 'Reference link is required').not().isEmpty(),
      check('description', 'Reference description is required').not().isEmpty(),
      check('image', 'Reference image is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    try {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
      }
      const { name, link, image, description } = req.body;
      const referenceItem = new Reference({
        name,
        image,
        link,
        description,
      });
      await referenceItem.save();
      res.status(200).json({ msg: ' Reference successfully added' });
    } catch (err) {
      console.error(err);
      res.status(500);
    }
  }
);

module.exports = router;
