const express = require('express');
const mongodb = require('mongodb');
const data = require('../data/data.json');

const adminRouter = express.Router();

adminRouter.route('/').get((req,res) => {
    const url =
        'mongodb+srv://dbUser:abc1234@cluster0.aj8fx.mongodb.net/test?retryWrites=true&w=majority';
    const dbName = 'Blogdb';

    (async function mongo(){
        let client;
        try{
            client = await mongodb.MongoClient.connect(url);
            console.log('Connected to the mongo DB');

            const db = client.db(dbName);

            const response = await db.collection('data').insertMany(data);
            res.json(response);

        }catch(error){
            console.log(error.stack);
        }
    }())
});

module.exports = adminRouter;