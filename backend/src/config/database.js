import mongoose from 'mongoose'
import { env } from './env.js'

let connectionPromise
let listenersRegistered = false

function registerConnectionListeners() {
  if (listenersRegistered) {
    return
  }

  listenersRegistered = true

  mongoose.connection.on('connected', () => {
    console.log('MongoDB connected')
  })

  mongoose.connection.on('error', (error) => {
    console.error('MongoDB connection error:', error)
  })

  mongoose.connection.on('disconnected', () => {
    console.warn('MongoDB disconnected')
  })
}

export async function connectDatabase() {
  registerConnectionListeners()

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection
  }

  if (!connectionPromise) {
    connectionPromise = mongoose.connect(env.mongodbUri).catch((error) => {
      connectionPromise = undefined
      throw error
    })
  }

  await connectionPromise

  return mongoose.connection
}

export async function disconnectDatabase() {
  connectionPromise = undefined
  await mongoose.disconnect()
}
