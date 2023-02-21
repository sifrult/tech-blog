const { Comment } = require('../models')

const commentData = [
    {
        comment_text: "Nice!",
        user_id: 2,
        blogpost_id: 1
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
