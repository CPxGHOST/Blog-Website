const express = require('express');
const viewBlogRouter = express.Router();
const blogs = require('../data/data.json');

viewBlogRouter.route('/:id').get((req, res) => {
    let id = req.params.id;
    res.render('ViewBlog', { blog: blogs[id] });
});

module.exports = viewBlogRouter;