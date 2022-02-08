import { Request, Response } from "express"

export const adminHome = (req: Request, res: Response) => {
    res.send("Admin home")
}