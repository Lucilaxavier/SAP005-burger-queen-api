const { Router } = require('express')
const UserController = require('../controller/UserController')

const router = Router()

// aqui vai as requisições
router.get("/", UserController.getAllExamples)

module.exports = router