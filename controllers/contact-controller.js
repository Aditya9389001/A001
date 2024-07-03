
const contactForm=async(req,res)=>{
    try{
        console.log(req.body)
        const {name,contact,email,message}=req.body;
        res.status(200).json({msg:req.body}); 
    }
    catch(error){
res.status(400).send({msg:"Error contact form"});
    }
}

module.exports={contactForm};