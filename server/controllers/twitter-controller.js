var fs = require('fs');
/*
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "data/data.db"
    }
  });
  */

 const knex = require('./../db.js')

 exports.usersAll = async (req, res) => {
    // Get all users from database
    knex
      .select('*') // select all records
      .from('users') // from 'users' table
      .limit(10) // only the first 10 rows, for debugging
      .then(userData => {
        // Send books extracted from database in response
        res.json(userData)
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error retrieving data: ${err}` })
      })
  }

 exports.userWhereID = async (req, res) => {
    // Get all users from database
    knex
      .select('*') // select all records
      .from('users') // from 'users' table
      .where('id_text', req.params.id)
      .then(userData => {
        // Send books extracted from database in response
        res.json(userData)
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error retrieving data: ${err}` })
      })
  }

  exports.tweetsWhereID = async (req, res) => {
    // Get all users from database
    knex
      .select('*') // select all records
      .from('tweets') // from 'users' table
      .where('user_id_text', req.params.id)
      .then(userData => {
        // Send books extracted from database in response
        res.json(userData)
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error retrieving data: ${err}` })
      })
  }

  exports.retweetsWhereUserID = async (req, res) => {
    // Get all users from database
    knex
      .select('*') // select all records
      .from('tweets') // from 'users' table
      .where('user_id_text', req.params.id)
      .andWhere('retweets', '>', 0)
      .then(userData => {
        // Send books extracted from database in response
        res.json(userData)
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error retrieving data: ${err}` })
      })
  }

  exports.communityAll = async (req, res) => {
     // Get all users from database
     knex
       .select('*') // select all records
       .from('community') // from 'users' table
       .limit(100) // only the first 100 rows, for debugging
       .then(userData => {
         // Send books extracted from database in response
         res.json(userData)
       })
       .catch(err => {
         // Send a error message in response
         res.json({ message: `There was an error retrieving data: ${err}` })
       })
   }

   exports.snapshotsWhereID = async (req, res) => {
    // Get all users from database
    knex
      .select('*') // select all records
      .from('snapshots') // from 'users' table
      .where('id_text', req.params.id)
      .limit(100) // only the first 100 rows, for debugging
      .then(userData => {
        // Send books extracted from database in response
        res.json(userData)
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error retrieving data: ${err}` })
      })
  }