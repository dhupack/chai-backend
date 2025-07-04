import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))  // kyuki data kai jga s ayege backend k and uske liye agr json se ayega to ye likna pdega
app.use(express.urlencoded({extended: true, limit: "16kb"})) // agr data as a url aye backend pr
app.use(express.static("public")) // agr jase kuch public asset ayege to uske liye h ye
app.use(cookieParser())

//routes import
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users", userRouter)

// http://localhost:8000/api/v1/users/register

export { app }