const router = require('express').Router();
const { Blogpost } = require('../models');

router.get('/', async (req, res) => {
  try {
    const blogpostData = await Blogpost.findAll()
    const blogposts = blogpostData.map((blogpost) => blogpost.get({ plain : true }));
    res.render('homepage', {
      blogposts
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {
  try{
    res.render('dashboard');
  } catch (err) {
    res.status(500).json(err);
  }
})




router.get('/login', async (req, res) => {
  try {
      res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
      res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
