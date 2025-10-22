const postModel = require("../models/post.model");

const createPostController = async (req, res) => {
  const { file } = req.body;
  const { _id } = req.user;
};

module.exports = {
  createPostController,
};
