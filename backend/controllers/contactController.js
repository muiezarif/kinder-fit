import Contact from "../model/Contact.js";

export const addContactUs = async(req,res,next) => {
    const {name,email,date,time,subject,message} = req.body;
    let existingUser;
    
    const contact = new Contact({
        name,email,date,time,subject,message
    })
    
    try{
        await contact.save()
    }catch(err){
        console.log(err)
    }
    return res.status(200).json({success:true,message:"Successfully Submitted",data:contact})    
}