import app from "./app";
import dotenv from "dotenv"
import connectDatabase from "./db/database";
import path from "path";
import express from "express";

// Config 
dotenv.config({path:"config/config.env"})
// Connecting to database
connectDatabase()
app.listen(process.env.PORT,() => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})
if (process.env.NODE_ENV === "production"){
    app.use(express.static('kinder-front/build'))
    app.get('*', (req, res) => {

    });
}
