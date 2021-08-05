const express = require('express');
const path = require('path');
const app = express();
const addBlogRouter = require('./src/routes/AddBlogRouter');
const adminRouter = require('./src/routes/adminRouter')
const allBlog = require('./src/data/data.json');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/AddBlog', addBlogRouter);
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use('/admin', adminRouter)


app.get('/', (req, res) => {
    res.render('Index', { blogs: allBlog });
});

app.listen(2678, () => {
    console.log('server started at http://localhost:2678')
})