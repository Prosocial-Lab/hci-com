// Import path module
const path = require('path')

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'db/data.db')

// Create connection to SQLite database
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
    supportBigNumbers: true,
    bigNumberStrings: true
  },
  useNullAsDefault: true
})

module.exports = knex