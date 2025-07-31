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

const updateData = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const updatedData = req.body;

        const index = database.findIndex((ele) => ele.id === id);

        if (index === -1) {
            return res.status(404).send({ message: "User ID not found" });
        }

        // Optional: Ensure the incoming object has matching ID
        if (updatedData.id !== id) {
            return res.status(400).send({ message: "ID in body must match ID in URL" });
        }

        // Replace the old entry with the new one
        database.splice(index, 1, updatedData);

        res.status(200).send({ message: "Data updated", result: database });

    } catch (err) {
        res.status(500).send({ message: "Data not updated...", result: err });
    }
};



const deleteData = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const index = database.findIndex((ele) => ele.id === id);

    if (index === -1) {
      return res.status(404).send({ message: "User ID not found" });
    }

    database.splice(index, 1);
    res.status(200).send({ message: "Data deleted", result: database });
  } catch (err) {
    res.status(500).send({ message: "Data not deleted", result: err });
  }
};


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
        res.status(200).send({message:"Data Getted",result:exitingdata})
    }
   catch(err){
         res.status(500).send({message:"Data not Getted",result:err})
    }
}
module.exports={postUser,getData,getDataById,updateData,deleteData}
