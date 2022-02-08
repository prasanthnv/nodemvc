import express, { Application, Request, Response } from "express";
import adminRouter from "./routes/admin.routes";
import userRouter from "./routes/user.routes";

const app:Application = express();


app.use('/', userRouter);
app.use('/admin', adminRouter);

app.listen(3000, ()=>{
    console.log("Server is ready on port 3000 !!");
})

