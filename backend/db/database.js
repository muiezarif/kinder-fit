import mongoose from "mongoose";
// import dotenv from "dotenv"

// dotenv.config({path:"../../backend/config/.env"})

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then((data) =>{
        console.log(`Mongodb connected with server: ${data.connection.host}`)
    }).catch((err)=>{
        console.log(err)
    })
}

export default connectDatabase

