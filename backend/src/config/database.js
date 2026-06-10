import mongoose from 'mongoose'
import { env } from './env.js'

export async function connectDatabase() {
  mongoose.connection.on('connected', () => {
    console.log('MongoDB connected')
  })

  mongoose.connection.on('error', (error) => {
    console.error('MongoDB connection error:', error)
  })

  mongoose.connection.on('disconnected', () => {
    console.warn('MongoDB disconnected')
  })

  await mongoose.connect(env.mongodbUri)
}

export async function disconnectDatabase() {
  await mongoose.disconnect()
}
