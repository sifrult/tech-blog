const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
const blogRoutes = require('./blogRoutes');
const dashRoutes = require('./dashRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/blogpost', blogRoutes);
router.use('/dashboard', dashRoutes);

module.exports = router;
