const router = require('express').Router();
const { Blogpost, User , Comment} = require('../models');

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
        logged_in: req.session.logged_in
    });
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
