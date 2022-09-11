const {signup,login,logout,checkAuth} =require('../controllers/users.controller')
const express = require('express');
const verifyAuth = require('../middleware/verifyAuth');
const router = express.Router()


router.post('/signup', signup)
router.post('/login', login)
router.get('/logout',logout )
router.get('/checkAuth',verifyAuth,checkAuth )



module.exports = router;