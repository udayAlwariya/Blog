const express = require('express')
const postV1Router = express.Router()
const postController = require('../Controllers/post')


postV1Router.get('/:id',postController.getOne)

postV1Router.get('/',postController.getAll)

postV1Router.post('/',postController.addData)

postV1Router.put('/:id',postController.updateData)

postV1Router.delete('/:id',postController.deleteData)

module.exports = postV1Router;