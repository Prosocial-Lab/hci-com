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