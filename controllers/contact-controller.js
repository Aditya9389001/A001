
const contactForm=async(req,res)=>{
    try{
        res.status(200).json({msg:"Contact form"}); 
    }
    catch(error){
res.status(400).send({msg:"home not found"});
    }
}

module.exports={contactForm};