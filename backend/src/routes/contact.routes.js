import { Router } from 'express'
import { ContactMessage } from '../models/ContactMessage.js'

export const contactRouter = Router()

contactRouter.post('/', async (req, res, next) => {
  try {
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
