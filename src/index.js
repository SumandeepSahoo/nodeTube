import dotenv from "dotenv"
import { application } from "express"
import connectDB from "./db/index.js"

dotenv.config ({
    path: './env'
})

connectDB()
.then(() => {
    application.listen(process.env.PORt || 8000, () => {
        console.log(`Server is running at port : ${process.env.POR}`);
    })
})
.catch((err) => {
    console.log("Mongo db connection failed !!!", err);
})