import express from "express"
import cors from "cors"
import contactUsRouter from "./routes/contactRoute"
import productRouter from "./routes/productRoute"
import adminBroRouter from "./routes/adminRoute"

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/kinderfit",contactUsRouter)
app.use("/api/kinderfit",productRouter)
app.use("/admin", adminBroRouter);


export default app;