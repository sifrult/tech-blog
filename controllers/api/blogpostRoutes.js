const router = require('express').Router();
const { Blogpost, User, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });

      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const blogpostData = await Blogpost.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });

      if (!blogpostData) {
        res.status(404).json({ message: 'No recipe found with this id!' });
        return;
      }

      res.status(200).json(blogpostData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Blogpost.findByPk(req.params.id);
    if (!post) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    if (title) {
      post.title = title;
    }
    if (content) {
      post.content = content;
    }
    await post.save();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
