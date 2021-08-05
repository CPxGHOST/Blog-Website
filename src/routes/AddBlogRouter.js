const express = require('express');
const addBlogRouter = express.Router();

addBlogRouter.route('/').get((req, res) => {
    res.render('AddBlog');
});

module.exports = addBlogRouter;