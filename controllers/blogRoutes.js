const router = require('express').Router();
const { Blogpost, User , Comment} = require('../models');
const withAuth = require('../utils/auth');

router.get('/:id', async (req, res) => {
    try{
      const blogpostData = await Blogpost.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['username']
          },
          {
            model: Comment,
            include: [
              {
                model: User,
                attributes: ['username'],
              }
            ]
          }
        ],
    });

    const blogposts = blogpostData.get({ plain: true});

    console.log(blogposts)

    res.render('blogpost', {
        ...blogposts,
        session_id: req.session.user_id,
        logged_in: req.session.logged_in
    });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/editPost/:id', async (req, res) => {
  try {
    const blogpostData = await Blogpost.findByPk(req.params.id);
    const blogpost = blogpostData.get({ plain: true });
    console.log(blogpost)
    res.render('editPost', { blogpost, session_id: req.session.user_id, logged_in: req.session.logged_in});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
