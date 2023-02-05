const sequelize = require('../config/connection');

const seedUser = require('./userData.js');
 const seedBlogpost = require('./blogpostData.js');


const seedAll = async () => {
  await sequelize.sync({ force: true});

  await seedUser();

  await seedBlogpost();

  process.exit(0);
}

seedAll();
