import 'dotenv/config'
import express, { Application } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import { NotFound, ErrorHandler } from './utils/middlewares'

const app: Application = express()

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/v1', require('./api'))

app.use(NotFound)
app.use(ErrorHandler)

export default app
