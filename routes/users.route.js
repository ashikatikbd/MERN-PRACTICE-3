const express = require('express');
const router = express.Router()
const path = require('path')
const {userHome, userAbout, userContact, userService, userForm, userPost, userRegister, userRegisterPost} = require(path.join(__dirname + '/../controllers/users.controller'))

// router.get('/', (req,res) => {
//     const id = req.header('id')
//     const name = req.header('name')
//     res.send(`name is ${name} ID is ${id}`)
// })

router.get('/', userHome)
router.get('/about', userAbout)
router.get('/contact', userContact)
router.get('/service', userService)
router.get('/form', userForm)
router.get('/register', userRegister)

router.use(express.urlencoded({extended: true}))
router.post('/form', userPost)
router.post('/register', userRegisterPost)

module.exports = router