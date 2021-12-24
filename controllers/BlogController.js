const Blog = require('../model/Blog');

const { validationResult } = require('express-validator');

const addBlog = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, content } = req.body;
    const blogItem = new Blog({
      title,
      content,
    });
    await blogItem.save();
    res.status(200).json({ msg: 'Blog Added Successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.json(blogs);
  } catch (err) {
    res.status(500);
  }
};
module.exports = { addBlog, getBlogs };
