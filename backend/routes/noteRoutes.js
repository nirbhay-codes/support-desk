const express = require('express')
//In Express, {mergeParams: true} is an option in express.Router() that determines whether the router should merge parameters from the parent router with its own. When set to true, it allows the router to access parameters defined in the parent router.
const router = express.Router({ mergeParams: true })
const { getNotes, addNote } = require('../controller/noteController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getNotes).post(protect, addNote)

module.exports = router