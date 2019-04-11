const express = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer')

const routes = express.Router()

const boxController = require('./controllers/boxcontroller')
const FileController = require('./controllers/filecontroller')

routes.post('/boxes', boxController.store)
routes.get('/boxes/:id', boxController.show)

routes.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store)

module.exports = routes
