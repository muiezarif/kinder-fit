import express from "express"
import cors from "cors"
import contactUsRouter from "./routes/contactRoute.js"
import productRouter from "./routes/productRoute.js"
import adminBroRouter from "./routes/adminRoute.js"
import * as path from "path";

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/kinderfit",contactUsRouter)
app.use("/api/kinderfit",productRouter)
app.use("/admin", adminBroRouter);


export default app;