const router = require("express").Router();
const post = require("./PostData");
require("dotenv").config();
const url = process.env.JSONPOST_URL;
router.get("/post", async (req, res) => {
  try {
    const results = await post.getPostData(url);
    res.send(results);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
