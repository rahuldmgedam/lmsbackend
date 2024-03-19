const express = require("express");
const addProjectModel = require("../model/user.model");

const ProjectRouter = express.Router();

ProjectRouter.post("/addproject", async (req, res) => {
  
     console.log("new project added successfully")
  try {
    const newProject = new addProjectModel(req.body);
    await newProject.save();
    res.json({ message: "new project added successfully" });
  } catch (error) {
    console.log(error);
  }
});

ProjectRouter.put("/editproject/:id", async (req, res) => {
       
  const {id} = req.params;
  console.log(" project updated successfully");

  const updateProject = await addProjectModel.findByIdAndUpdate(id,req.body,{new:true})
  if(!updateProject){
    return res.status(404).send("No user found");
  }
  res.json(updateProject);
});

ProjectRouter.delete('/deleteproject/:id',async (req ,res)=>{
      const {id}=req.params;
      
      const removeUser=await addProjectModel.findByIdAndDelete(id); 
      if (!removeUser) {  
          return res.status(200).json({msg:" project removed"});
          console.log("Project deleted")                                   
      
      }else{    

      }})

ProjectRouter.get("/",async (req,res) => {
  try {
    const response = await addProjectModel.find({});
    res.json(response);
  } catch (err) {
    res.json(err);
  }
})
// get all projects 

module.exports = {
    ProjectRouter,
};
