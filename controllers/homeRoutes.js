const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('homepage');
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

module.exports = router;
