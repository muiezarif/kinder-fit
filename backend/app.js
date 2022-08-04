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
const sendFile = (file) => (req, res) => res.sendFile(path.resolve(dir, 'build', file));
const pathMap = new Set([
    '/settings', '/home' // All available static paths
]);
app.use(express.static(path.join(dir, 'build')));
app.get('*', (req, res) => {
    const p = req.path;
    if (pathMap.has(p)) res.sendFile(path.resolve(dir, 'build', `${p.slice(1)}.html`));
    else res.sendFile(path.resolve(dir, 'build', '404.html'));
});

export default app;