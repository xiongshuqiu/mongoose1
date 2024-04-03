//1.导入mongoose、Date、ObjectId
const mongoose = require("mongoose");//定义moogoose服务，从mongoose中导入
const Elderly = require("./elderlyModel")
const { Date } = require("mongoose");//定义日期，从mongoose中导入
const { ObjectId } = require("mongodb");//定义对象ID,从mongodb中导入

//2.设置文档结构对象（相当于文档格式）
const elderlySchema = mongoose.Schema(
  {
   
     departmentNumber: { type: String},
     elderlyNumber: { type: String},
     elderlyName: { type: String},
     gender:{type: String},
     age:{type: Number},
     elderlyPhone:{type: Number},
     checkInDate:{ type:Date},
     roomNumber:{type: Number},
     responsibleDoctor:[ String ],
    familyInformation:{name:String,phone:Number,relation:String}
    
  });
const divisional_managementSchema= mongoose.Schema(
  {
 departmentName: {type: String},
 description:{type: String},
 function: {type: String},
 departmentNumber: {type: String},
 departmentHead: {type: String},
 HeadPhone: {type: Number},
 staffNumber: {type: Number}
  })



//3.创建文档模型对象（相当于集合）
module.exports = mongoose.model("divisional_management", divisional_managementSchema, "divisional_management");
