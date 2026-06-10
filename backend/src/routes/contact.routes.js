import { Router } from 'express'
import { connectDatabase } from '../config/database.js'
import { ContactMessage } from '../models/ContactMessage.js'

export const contactRouter = Router()

contactRouter.post('/', async (req, res, next) => {
  try {
    await connectDatabase()

    const contactMessage = await ContactMessage.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    })

    res.status(201).json({
      id: contactMessage.id,
      message: 'Contact message created',
    })
  } catch (error) {
    next(error)
  }
})
