const mongoose=require("mongoose");

const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    contact:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },message:{
        type:String,
        require:true,
    }
    });

const contactUser= new mongoose.model("Contact",contactSchema);

module.exports=contactUser;