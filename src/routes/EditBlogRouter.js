const express = require('express');
const Blog = require('../../models/blog');
const EditBlogRouter = express.Router();

EditBlogRouter.route('/:id').get((req, res) => {
    let id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('EditBlog',{blog: result})
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = EditBlogRouter;