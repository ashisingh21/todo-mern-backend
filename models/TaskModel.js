const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Category = require('./CategoryModel'); 

const TaskModel = new mongoose.Schema({
title:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
category:{
type: mongoose.Schema.Types.ObjectId,
ref:Category
},

status:{
    type:Number,
    required: true,
    default: 0
},
})

module.exports =  mongoose.model('task',TaskModel)