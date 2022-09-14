import { Request, Response } from 'express' 
export const homeFunction = (req: Request, res: Response) => {
  try {
    return res.status(200).json({ user: 'root' })
  } catch (error) {
    return res.status(400).json({ user: 'error' })
  }
}