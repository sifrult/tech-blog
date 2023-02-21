const router = require('express').Router();
const { Blogpost, User, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/newPost', withAuth, async (req, res) => {
  try {
    const newPost = await Blogpost.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router;
