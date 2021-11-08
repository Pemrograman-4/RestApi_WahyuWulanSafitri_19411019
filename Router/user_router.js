/*
Lampung Indonesia
03/10/2021
Wahyu Wulan Safitri
NIM :19411019
*/
const router = require('express').Router()
const userController = require('../Controller/user_controller')
router.post('/register', (req, res) => {
  userController.register(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.post('/login', (req, res) => {
  userController.login(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
module.exports = router