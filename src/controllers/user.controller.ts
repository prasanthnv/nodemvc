import { Request, Response } from "express";

export const index = (req: Request, res: Response) => {
    res.send("Hello world from user controller");
}
export const welcome = (req: Request, res: Response) => {
    res.send("Welcome Page");
}