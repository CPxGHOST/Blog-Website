const express = require('express');
const addBlogRouter = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const Blog = require('../../models/blog');


const urlencodedParser = bodyParser.urlencoded({ extended: false });

addBlogRouter.route('/').get((req, res) => {
    res.render('AddBlog');
});

addBlogRouter.route('/').post(urlencodedParser, (req, res) => {
    let title = req.body.title;
    let content = req.body.content;
    let category = req.body.category;
    const blog = new Blog({
        title: title,
        content: content,
        category: category
    });
    
    blog.save()
        .then((result)=> {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = addBlogRouter;