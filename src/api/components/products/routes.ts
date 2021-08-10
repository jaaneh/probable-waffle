import express, { Application } from 'express'
const app: Application = express()

import * as productsController from './controllers'

app.get('/', productsController.getAll)
app.get('/:id', productsController.getSingle)

module.exports = app
