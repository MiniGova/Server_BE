var database=require("../model/user.model")

const postUser=async(req,res)=>{

    try{
     const newentry=req.body;
     const existingemail=database.find((ele)=>{
        return ele.email===newentry.email;
     })
     if(existingemail){
        return res.status(400).send({message:"the email already exists..."})
     }
     
    database.push(newentry);
   res.status(201).send({message:"Data Added...",result:database})
    }
    catch(err){
        res.status(500).send({message:"Data Added...",result:err})
    }

}

const updateData=async(req,res)=>{
  try{
    const {id}=req.params;
    const updataData=req.body;
    const index=database.findIndex((ele)=>{
      return ele.id===Number(id)
    })
   if(index===-1){
    return res.status(404).sent({message:"User ID not found"})
   }
    database.splice(index,1,updataData)
     res.status(200).send({message:"Data updata",result:database})
  }
  catch(err){
     res.status(200).send({message:"Data not updata",result:err})
  }
}

const deleteData=async(req,res)=>{
  try{
    const {id}=req.params;
    
    const index=database.findIndex((ele)=>{
      return ele.id===Number(id)
    })
    if(index===-1){
    return res.status(404).sent({message:"User ID not found"})
   }
   
    database.splice(index,1)
     res.status(200).send({message:"Data delete",result:database})
  }
  catch(err){
     res.status(200).send({message:"Data not delete",result:err})
  }
}

const getData=async(req, res) => {
    try {
        res.status(200).send({
            message: "Data Retrieved Successfully",
            result: database
        });
    } catch (err) {
        res.status(500).send({
            message: "Failed to Retrieve Data",
            error: err
        });
    }
}
const getDataById=async(req,res)=>{
    try{
        const {id}=req.params;
        
        if(!id || isNaN(id)){
          return res.status(400).send({message :"User ID not found"})
        }
        const exitingdata=database.find((ele)=>
            ele.id===Number(id)
    );
        if(!exitingdata){
            return res.status(404).send({message:"Id could not found"})
        }
        res.status(200).send({message:"Data Getted",result:database})
    }
   catch(err){
         res.status(500).send({message:"Data not Getted",result:err})
    }
}
module.exports={postUser,getData,getDataById,updateData,deleteData}
