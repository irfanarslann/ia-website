const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check } = require('express-validator');
const ReferenceController = require('../controllers/ReferenceController');
// @route     GET api/reference
// @desc      Get References
// @access    Public
router.get('/', ReferenceController.getReferences);

// @route     POST api/reference
// @desc      Add new Reference
// @access    Private
router.post('/', [
  auth,
  [
    check('name', 'Reference name is required').not().isEmpty(),
    check('link', 'Reference link is required').not().isEmpty(),
    check('description', 'Reference description is required').not().isEmpty(),
    check('image', 'Reference image is required').not().isEmpty(),
  ],
  ReferenceController.addReference,
]);

module.exports = router;
