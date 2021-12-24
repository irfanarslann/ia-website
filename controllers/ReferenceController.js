const Reference = require('../model/Reference');
const { validationResult } = require('express-validator');
const getReferences = async (req, res) => {
  try {
    const references = await Reference.find({});
    res.json(references);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
const addReference = async (req, res) => {
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
};
module.exports = { getReferences, addReference };
