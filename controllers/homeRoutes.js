const router = require('express').Router();
const { Blogpost, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    const blogpostData = await Blogpost.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    })
    const blogposts = blogpostData.map((blogpost) => blogpost.get({ plain : true }));
    res.render('homepage', {
      blogposts,
      logged_in: req.session.logged_in
    });
    console.log(blogposts)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {
  try{
    res.render('dashboard', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
})


router.get('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login')
});

router.get('/signup', async (req, res) => {
  try {
      res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
