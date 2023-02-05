const { User } = require('../models');

const userData = [
    {
      username: "Xandromus",
      password: "password12345"
    },
    {
      username: "Lernantino",
      password: "password12345"
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
