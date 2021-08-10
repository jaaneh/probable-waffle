import express, { Application } from 'express'
const app: Application = express()

import * as productsController from './controllers'

app.get('/characters', productsController.charactersGetAll)
app.get('/characters/:id', productsController.charactersGetSingle)

module.exports = app
