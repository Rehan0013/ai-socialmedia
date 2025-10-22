const postModel = require("../models/post.model");

const generateCaption = require("../services/ai.service");

const createPostController = async (req, res) => {
  const file = req.file;
  const { _id } = req.user;

  const base64Image = new Buffer.from(file.buffer).toString("base64");

  const caption = await generateCaption(base64Image);

  // console.log(caption);

  // console.log(file);

  res.json({
    caption,
  });
};

module.exports = {
  createPostController,
};
