import mongoose from "mongoose";

const Schema = mongoose.Schema;
const productSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true,
    },
    image:{
        type: String,
        required:true,
    },
    redirect_url:{
        type: String,
        required:true,
    }
}, { timestamps: true })

export default mongoose.model("Product",productSchema)