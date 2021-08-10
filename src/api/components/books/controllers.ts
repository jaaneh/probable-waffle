import type { Request, Response } from 'express'

import { data as books } from '../../../data/books.json'

export const getAll = (req: Request, res: Response) => {
  return res.status(200).json(books)
}

export const getSingle = (req: Request, res: Response) => {
  const { id } = req.params
  const book = books.filter(book => book.id === parseInt(id))[0] || {}

  return res.status(200).json(book)
}

export const getRandom = (req: Request, res: Response) => {
  const rand = Math.floor(Math.random() * books.length)
  const book = books[rand]

  return res.status(200).json(book)
}
