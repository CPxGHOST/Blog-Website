const express = require('express');
const data = require('../data/data.json');
const EditBlogRouter = express.Router();

EditBlogRouter.route('/:id').get((req, res) => {
    let id = req.params.id;
    res.render('EditBlog', { blog: data[id] });
});

module.exports = EditBlogRouter;