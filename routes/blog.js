const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check } = require('express-validator');
const BlogController = require('../controllers/BlogController');
// @route     GET api/blog
// @desc      Get blogs
// @access    Public
router.get('/', BlogController.getBlogs);

// @route     POST api/blog
// @desc      Add new blog
// @access    Private
router.post('/', [
  auth,
  [
    check('title', 'Title is required').not().isEmpty(),
    check('content', 'Content is required').not().isEmpty(),
  ],
  BlogController.addBlog,
]);

module.exports = router;
