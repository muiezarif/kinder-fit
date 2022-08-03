import Product from "../model/Product";

export const addProduct = async(req,res,next) => {
    const {name,description,image,redirect_url} = req.body;
    let existingUser;
    
    const product = new Product({
        name,description,image,redirect_url
    })
    
    try{
        await product.save()
    }catch(err){
        console.log(err)
    }
    return res.status(200).json({success:true,message:"Successfully Submitted",data:product})    
}