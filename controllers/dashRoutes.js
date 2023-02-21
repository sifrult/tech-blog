const router = require('express').Router();
const { Blogpost, User , Comment} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try{
        const blogpostData = await Blogpost.findAll({
          where: {user_id: req.session.user_id},
          include: [{model: User, attributes: ['username']}]
        });
        const blogposts = blogpostData.map((blogpost) => blogpost.get({ plain : true }));
        console.log(blogposts)
      res.render('dashboard', {
        blogposts,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/addPost', async (req, res) => {
  try {
    res.render('addPost');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
