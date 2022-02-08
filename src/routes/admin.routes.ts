import express,{ Router } from "express";
import { adminHome } from "../controllers/admin.controller";

const adminRouter:Router = express.Router();

adminRouter.get("/", adminHome);

export default adminRouter;



