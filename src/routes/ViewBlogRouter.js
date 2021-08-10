const express = require('express');
const viewBlogRouter = express.Router();
const Blog = require('../../models/blog');

viewBlogRouter.route('/:id').get((req, res) => {
    let id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('ViewBlog', { blog: result, indexId: id });
        })
        .catch((err) => {
            console.log(err);
        });
});

viewBlogRouter.route('/:id').delete((req, res) => {
    let id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.send('deleted');        
        })
        .catch((err) => console.log(err));
    
})

module.exports = viewBlogRouter;