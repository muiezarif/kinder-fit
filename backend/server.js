import app from "./app";
import dotenv from "dotenv"
import connectDatabase from "./db/database";

// Config 
dotenv.config({path:"config/config.env"})
// Connecting to database
connectDatabase()
app.listen(process.env.PORT,() => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})