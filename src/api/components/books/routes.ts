import express, { Application } from 'express'
const app: Application = express()

import * as booksController from './controllers'

app.get('/', booksController.getAll)
app.get('/random', booksController.getRandom)
app.get('/:id', booksController.getSingle)

module.exports = app
