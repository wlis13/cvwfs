import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { env } from './config/env.js'
import { errorHandler } from './middleware/errorHandler.js'
import { notFoundHandler } from './middleware/notFoundHandler.js'
import { apiRouter } from './routes/index.js'

export const app = express()

app.use(helmet())
app.use(cors({ origin: env.corsOrigin }))
app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ extended: true }))

if (env.nodeEnv !== 'test') {
  app.use(morgan('dev'))
}

app.use('/api', apiRouter)
app.use(notFoundHandler)
app.use(errorHandler)
