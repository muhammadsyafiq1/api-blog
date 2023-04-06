import express from "express"
import postRouter from "./routes/posts.js"
import authRouter from "./routes/auth.js"

const app = express()

app.use(express.json())

app.use("/api/posts", postRouter)
app.use("/api/auth", authRouter)
// app.use("/api/users")

app.listen(8800, () => {
    console.log('connect');
})