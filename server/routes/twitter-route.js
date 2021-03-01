// Import express
const express = require('express')

// Import twitter-controller
const twitterRoutes = require('./../controllers/twitter-controller.js')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all users
// In server.js, data route is specified as '/twitter'
// this means that '/all' translates to '/twitter/all'
router.get('/all', twitterRoutes.usersAll)

router.get('/userWhereID/:id', twitterRoutes.userWhereID)

router.get('/tweetsWhereID/:id', twitterRoutes.tweetsWhereID)

router.get('/retweetsWhereUserID/:id', twitterRoutes.retweetsWhereUserID)

router.get('/communityAll', twitterRoutes.communityAll)

router.get('/snapshotsWhereID/:id', twitterRoutes.snapshotsWhereID)

// Export router
module.exports = router