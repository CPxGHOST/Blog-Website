const express = require('express');
const addBlogRouter = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const path = require('path');
const data = require('../data/dummyData.json');


addBlogRouter.route('/').get((req, res) => {
    res.render('AddBlog');
});

addBlogRouter.route('/').post(urlencodedParser, (req, res) => {
    let title = req.body.title;
    let content = req.body.content;
    let category = req.body.category;
    let id = GetId();
    let newData = {
        id: id,
        title: title,
        Content: content,
        Category: category
    };
    WriteOnDataFile(newData);
    res.render('ViewBlog', { blog: newData, indexId: 5 });

})

function GetId() {
    return data.id + 1;
}

function WriteOnDataFile(blogData) {
    let json = JSON.stringify(blogData);
    let filePath = path.resolve(__dirname, './../data/dummyData.json');
    fs.writeFileSync(filePath, json, 'utf8');
}

function saveOnDb(){

}

module.exports = addBlogRouter;