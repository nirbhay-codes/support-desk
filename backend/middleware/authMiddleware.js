const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      // For e.g. Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTJjNjdiOTU5Y2NjNWUyZjc3ZjA0MCIsImlhdCI6MTcxMjU2NTk5NiwiZXhwIjoxNzE1MTU3OTk2fQ.T_rUV1djsY-FT4YPTfRZRwb7GzDi1_pNLDiQ6qoJkKc
      token = req.headers.authorization.split(' ')[1]

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // ! Get user based on "id" in the token and set the user to "req.user"
      // * NOTE: When you use User.findById(decoded.id) to find a user in the MongoDB
      // * database, Mongoose understands that you are looking for a document with
      // * the "_id" field matching the "decoded.id" value. Mongoose is able to handle
      // * this transparently, and the resulting req.user object will have an "id" field
      // * (not "_id") that corresponds to the "decoded.id" value. This is because
      // * Mongoose maps the "_id" field to the "id" property in the returned document
      // * when querying by "_id".
      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not Authorized')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized')
  }
})

module.exports = { protect }
