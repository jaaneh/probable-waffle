import type { Request, Response } from 'express'

import { data as characters } from '../../../data/breaking-bad/characters.json'
import { data as episodes } from '../../../data/breaking-bad/episodes.json'

// Characters
export const charactersGetAll = (req: Request, res: Response) => {
  return res.status(200).json(characters)
}

export const charactersGetSingle = (req: Request, res: Response) => {
  const { id } = req.params
  const character = characters.filter(char => char.id === parseInt(id))[0] || {}

  return res.status(200).json(character)
}

// Episodes
export const episodesGetAll = (req: Request, res: Response) => {
  return res.status(200).json(episodes)
}

export const episodesGetSingle = (req: Request, res: Response) => {
  const { id } = req.params
  const episode = episodes.filter(ep => ep.episode_id === parseInt(id))[0] || {}

  return res.status(200).json(episode)
}
