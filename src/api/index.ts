import express, { Application } from 'express'

const app: Application = express()

app.use('/products', require('./components/products/routes'))
app.use('/books', require('./components/books/routes'))
app.use('/breaking-bad', require('./components/breakingbad/routes'))

module.exports = app
