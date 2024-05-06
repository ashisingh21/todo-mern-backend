const CategoryModel = require("../models/CategoryModel");

module.exports.addTaskCategoryController = async (req,res)=>{
 try {
    const {name}= req.body;
    const category = await new CategoryModel({name}).save();
     res.status(201).send({success:true,message:'Category saved successfully!',category})
    } catch (error) {
        res.status(500).send({'error':error})
    }
}


module.exports.UpdateTaskCategoryController = async (req,res)=>{
 try {
     const { name } = req.body;
     const updatedCategory = {name}
    const category = await CategoryModel.findByIdAndUpdate(req.params.id,updatedCategory,{new:true})
     res.status(200).send({success:true,message:'Category updated successfully!',updatedCategory})
    } catch (error) {
        res.status(500).send({'error':error})
    }
}

module.exports.AllTaskCategoryController = async (req,res)=>{
 try {

    const allCategory = await CategoryModel.find({});
      res.status(200).send({success:true,message:'Category fetched successfully!',allCategory})
    } catch (error) {
        res.status(500).send({'error':error})
    }
}
module.exports.getSingleCategoryController = async (req,res)=>{
    try {
   
        const {id} = req.params;
       const category = await CategoryModel.findById(id);
         res.status(200).send({success:true,message:'Category fetched successfully!',category})
       } catch (error) {
           res.status(500).send({'error':error})
       }
   }





module.exports.deleteTaskCategoryController = async (req,res)=>{
 try {
    const {id}= req.params;
    const category = await CategoryModel.findByIdAndDelete(id);
     res.status(200).send({success:true,message:'Category deleted successfully!',category})
    } catch (error) {
        res.status(500).send({'error':error})
    }
}