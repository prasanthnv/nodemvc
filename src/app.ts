import express, { Application, Request, Response } from "express";
import userRouter from "./routes/user.routes";

const app:Application = express();


app.use('/user', userRouter);

app.listen(3000, ()=>{
    console.log("Server is ready on port 3000 !!");
})

