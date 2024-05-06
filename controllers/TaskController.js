const TaskModel = require("../models/TaskModel");
const { UpdateTaskCategoryController } = require("./TaskCategoryController");

module.exports.addTaskController = async (req,res)=>{
    try {
        const { title, description, category } = req.body;
        
    const task = await new TaskModel({title,description,category}).save();
     res.status(201).send({success:true,message:'Task added successfully!',task})
    } catch (error) {
        res.status(500).send({'error':error})
    }
}

module.exports.UpdateTaskController = async (req,res)=>{
    try {
    const {title,description,category} = req.body;
    const updatedTask = {title,description,UpdateTaskCategoryController}
    const task = await TaskModel.findByIdAndUpdate(req.params.id,updatedTask,{new:true})
     res.status(201).send({success:true,message:'Task updated successfully!',task})
    } catch (error) {
        res.status(500).send({'error':error})
    }
}

module.exports.UpdateTaskStatusController = async (req,res)=>{
    try {
    const {status} =req.body ;
    const updatedTask = {status}
    const task = await TaskModel.findByIdAndUpdate(req.params.id,updatedTask,{new:true})
     res.status(201).send({success:true,message:'Status updated successfully!',task})
    } catch (error) {
        res.status(500).send({'error':error})
    }
}

module.exports.AllTaskController = async (req,res)=>{
    try {
        const task = await TaskModel.find({}).populate('category')
        


     res.status(201).send({success:true,message:'Tasks fetched successfully!',task})
    } catch (error) {
        res.status(500).send({'error':error})
    }
}
module.exports.GetSingleTaskController = async (req,res)=>{
    try {
        const {id}= req.params;

    const task = await TaskModel.findById(id).populate('category.name')
     res.status(201).send({success:true,message:'Task fetched successfully!',task})
    } catch (error) {
        res.status(500).send({'error':error})
    }
}
module.exports.DeleteTaskController = async (req,res)=>{
    try {
        const {id}= req.params;
    const task = await TaskModel.findByIdAndDelete(id)
     res.status(201).send({success:true,message:'Task deleted successfully!',task})
    } catch (error) {
        res.status(500).send({'error':error})
    }
}