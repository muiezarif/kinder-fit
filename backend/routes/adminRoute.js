import AdminBro from "admin-bro"
import mongoose from "mongoose"
import AdminBroExpress from "admin-bro-expressjs"
import AdminBroMongoose from "admin-bro-mongoose"
import dotenv from "dotenv"

dotenv.config({path:"backend/config/config.env"})
AdminBro.registerAdapter(AdminBroMongoose)

const adminBro = new AdminBro({
    databases: [mongoose],
    rootPath: '/admin',
    branding: {
        companyName: 'KinderFit',
    }
  })
const ADMIN = {
    email:process.env.ADMIN_EMAIL || "admin@gmail.com",
    password: process.env.ADMIN_PASSWORD || "admin"
}
const adminBroRouter = AdminBroExpress.buildAuthenticatedRouter(adminBro,{
    cookieName: process.env.ADMIN_COOKIE_NAME || 'adminbro',
    cookiePassword: process.env.ADMIN_COOKIE_PASSWORD || "admin1234",
    authenticate: async (email,password) => {
        if(email === ADMIN.email && password === ADMIN.password){
            return ADMIN
        }
        return null
    },
})

export default adminBroRouter