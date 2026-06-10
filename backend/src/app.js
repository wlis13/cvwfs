import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { env } from './config/env.js'
import { errorHandler } from './middleware/errorHandler.js'
import { notFoundHandler } from './middleware/notFoundHandler.js'
import { apiRouter } from './routes/index.js'

export const app = express()

const corsOptions = {
  origin(origin, callback) {
    if (!origin || env.corsOrigins.includes(origin)) {
      callback(null, true)
      return
    }

    callback(new Error(`CORS origin not allowed: ${origin}`))
  },
}

app.get('/', (_req, res) => {
  res.json({
    name: 'cvwfs-backend',
    status: 'ok',
    health: '/api/health',
  })
})

app.use(helmet())
app.use(cors(corsOptions))
app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ extended: true }))

if (env.nodeEnv !== 'test') {
  app.use(morgan('dev'))
}

app.use('/api', apiRouter)
app.use(notFoundHandler)
app.use(errorHandler)
