import express from "express";
import { addContactUs } from "../controllers/contactController.js";

const contactUsRouter = express.Router()

contactUsRouter.post("/contact",addContactUs)


export default contactUsRouter;