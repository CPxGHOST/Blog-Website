const express = require('express');
const path = require('path');
const addBlogRouter = require('./src/routes/AddBlogRouter');
const viewBlogRouter = require('./src/routes/ViewBlogRouter');
const editBlogRouter = require('./src/routes/EditBlogRouter');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const app = express();

const dbURI = 'mongodb+srv://mridul:qwertyuiop1234567890@todo.4zjnj.mongodb.net/blogs-database?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(2678, () => {
        console.log('server started at http://localhost:2678');
    }))
    .catch((err) => console.log(err));


app.use('/AddBlog', addBlogRouter);
app.use('/ViewBlog', viewBlogRouter);
app.use('/EditBlog', editBlogRouter);
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', './src/views');
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
   Blog.find()
    .then((result) => {
        res.render('Index',{blogs : result});
    })
    .catch((err) => {
        console.log(err);
    });
});

