const express = require('express')
const router = express.Router()
const { getTickets, createTicket } = require('../controller/ticketController')

const { protect } = require('../middleware/authMiddleware')

// router.get('/', getTickets)
// router.post('/', createTicket)
router.route('/').get(protect, getTickets).post(protect, createTicket)

module.exports = router