import { Request, Response } from 'express'
import Demo from '../models/demo'

export const getDemoData = async (req: Request, res: Response) => {
  try {
    const demos = await Demo.find()
    res.json(demos)
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error fetching demos' + error.message })
    } else {
      res.status(500).json({ message: 'Unknown error occurred while fetching demos' })
    }
  }
}