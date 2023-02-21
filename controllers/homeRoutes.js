const router = require('express').Router();
const { Blogpost, User , Comment} = require('../models');

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

router.get('/blogpost/:id', async (req, res) => {
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
