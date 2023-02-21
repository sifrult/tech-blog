const { Blogpost } = require("../models")

const blogpostData = [
    {
      title: "Why MVC is so important",
      content: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
      date_created: "5/8/2020",
      user_id: 1
    },
    {
      title: "Authentication vs Authorization",
      content: "There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed to access the system.",
      date_created: "5/8/2020",
      user_id: 1
    }
  ]

  const seedBlogpost = () => Blogpost.bulkCreate(blogpostData);

  module.exports = seedBlogpost;
