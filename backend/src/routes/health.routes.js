import mongoose from 'mongoose'
import { Router } from 'express'
import { connectDatabase } from '../config/database.js'

export const healthRouter = Router()

healthRouter.get('/', async (_req, res) => {
  try {
    await connectDatabase()

    res.json({
      status: 'ok',
      database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    res.status(503).json({
      status: 'degraded',
      database: 'disconnected',
      message: error.message,
      timestamp: new Date().toISOString(),
    })
  }
})
