// var express=require("express");
// var server=express();
// var port=8000;

// server.get("/data",(req,res)=>{
//     res.send("data getted");
// })
// server.get("/home",(req,res)=>{
//     res.send("home data");
// })

// server.listen(port,()=>{
//     console.log(`server is running on${port}`)
// })

//to create a server
var express=require("express")
const server=express();
const port=8000;
const cors = require("cors");
server.use(cors());

var userRouter=require("./router/user.router")
// var{postUser,getData,getDataById,updateData,deleteData}=require("./controller/user.controller")
server.use(express.json())

server.use("/user",userRouter)
// server.post("/postdata",postUser)
// server.get("/postdata",getData)
// server.get("/postdata",getDataById)
// server.put("/postdata",updateData)
// server.delete("/postdata",deleteData)










// const database=[
//     {
//       id:1,
//       name:"gova",
//       age:20,
//       email:"gova@gmail.com"
//     }
// ]

// server.post("/postdata",async(req,res)=>{

//     try{
//      const newentry=req.body;
//      const existingemail=database.find((ele)=>{
//         return ele.email===newentry.email;
//      })
//      if(existingemail){
//         return res.status(400).send({message:"the email already exists..."})
//      }
     
//    const data=await database.push(newentry);
//    res.status(201).send({message:"Data Added...",result:database})
//     }
//     catch(err){
//         res.status(500).send({message:"Data Added...",result:err})
//     }

// })

// // server.get("/",(req,res)=>{
// //     res.status(200).send("gova");
// // })
// // server.get("/home",(req,res)=>{
// //     res.status(200).send("this home pages");
// // })

// server.put("/updata/:id",async(req,res)=>{
//   try{
//     const {id}=req.params;
//     const updataData=req.body;
//     const index=database.findIndex((ele)=>{
//       return ele.id===Number(id)
//     })
//     if(index+1 !=id){
//        return res.status(400).send({message:"Id could not found..."})
//     }
//     database.splice(index,1,updataData)
//      res.status(200).send({message:"Data updata",result:database})
//   }
//   catch(err){
//      res.status(200).send({message:"Data not updata",result:err})
//   }
// })

// server.delete("/delete/:id",async(req,res)=>{
//   try{
//     const {id}=req.params;
    
//     const index=database.findIndex((ele)=>{
//       return ele.id===Number(id)
//     })
//     if(index+1 !=id){
//        return res.status(400).send({message:"Id could not found..."})
//     }
//     database.splice(index,1)
//      res.status(200).send({message:"Data delete",result:database})
//   }
//   catch(err){
//      res.status(200).send({message:"Data not delete",result:err})
//   }
// })
// server.get("/getdata", async(req, res) => {
//     try {
//         res.status(200).send({
//             message: "Data Retrieved Successfully",
//             result: database
//         });
//     } catch (err) {
//         res.status(500).send({
//             message: "Failed to Retrieve Data",
//             error: err
//         });
//     }
// });
// server.get("/postdata/:id",async(req,res)=>{
//     try{
//         const {id}=req.params;
        
        
//         const exitingdata=database.find((ele)=>
//             ele.id===id
//         );
//         if(!exitingdata){
//             return res.status(404).send({message:"Id could not found"})
//         }
//         res.status(200).send({message:"Data Getted",result:database})
//     }
//    catch(err){
//          res.status(200).send({message:"Data not Getted",result:err})
//     }
// })

server.listen(port, () => {
  console.log("server is running on port " + port);
});