import app from "./app.js";
import dotenv from "dotenv"
import connectDatabase from "./db/database.js";
import path from "path";
import express from "express";

// Config 
dotenv.config({path:"config/config.env"})
// Connecting to database
connectDatabase()
app.listen(process.env.PORT,() => {
    console.log(`Server is working on port:${process.env.PORT}`)
})
if (process.env.NODE_ENV === "production"){
    app.use(express.static('../kinder-front/build'))
    app.get('*', (req, res) => {

    });
// const dir = __dirname;
// const sendFile = (file) => (req, res) => res.sendFile(path.resolve(dir, 'build', file));
// const pathMap = new Set([
//     '/', '/home' // All available static paths
// ]);
// app.use(express.static(path.join(dir, 'build')));
// app.get('*', (req, res) => {
//     const p = req.path;
//     if (pathMap.has(p)) res.sendFile(path.resolve(dir, 'build', `${p.slice(1)}.html`));
//     else res.sendFile(path.resolve(dir, 'build', '404.html'));
// });
}
