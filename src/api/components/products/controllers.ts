import type { Request, Response } from 'express'

import { data as products } from '../../../data/products.json'

export const getAll = (req: Request, res: Response) => {
  return res.status(200).json(products)
}

export const getSingle = (req: Request, res: Response) => {
  const { id } = req.params
  const product = products.filter(product => product.id === parseInt(id))[0] || {}

  return res.status(200).json(product)
}
