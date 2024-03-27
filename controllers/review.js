const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

//return all reviews
const getAll = async (req, res, next) => {
  try{
    const result = await mongodb.getDb().db().collection('review').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  }  catch (err){
    res.status(500).json({message: err.message});
  }
};


module.exports = { getAll };
