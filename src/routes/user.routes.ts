import express,{ Router } from "express";
import { index, welcome } from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const userRouter:Router = express.Router();

userRouter.get("/", index);
userRouter.get("/welcome",authMiddleware, welcome);

export default userRouter;



