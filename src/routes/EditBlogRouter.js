const express = require('express');
const Blog = require('../../models/blog');
const bodyParser = require('body-parser');

const EditBlogRouter = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

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

EditBlogRouter.route('/:id').post(urlencodedParser, (req , res) => {
    let id = req.params.id;
    let title = req.body.title;
    let content = req.body.content;
    let category = req.body.category;

    Blog.findByIdAndUpdate(id , {title: title, content: content, category: category})
        .then((result) => {
            res.redirect('/');          
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = EditBlogRouter;