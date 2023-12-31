const express = require('express')
const router = express.Router()
const {createUser, userLogin} = require('../controllers/userControllers')

// create user route
router.post('/register', createUser)

router.post('/login', userLogin)


module.exports = router