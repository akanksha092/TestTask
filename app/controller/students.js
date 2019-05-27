//Student CRUD Operation
var Students = require('./../../services/students');
var Boom = require('boom');
var Common = require('./../config/common');


//add Student
exports.addStudent = async function(req,res){
   var payload = req.body;
   var addVal = await Students.addStudent(payload);
   if(addVal){
     return res.send(Common.successResponse('Successfully Created!', addVal));
   }else{
     return res.send(Common.errorResponse("badImplementation", "Error creating student"));
   }
}

//getStudent Detail
exports.getStudentDetail = async function(req,res){
   var studentId = req.query.studentId;
   var getList = await Students.getStudentDetail(studentId);
   if(getList){
     return res.send(Common.successResponse('Successfully retrieved data!', getList));
   }else{
     return res.send(Common.errorResponse("badImplementation", "Error retrieving students data"));
   }
}

//update student Detail
exports.updateStudent = async function(req,res){
   var payload = req.body;
   var matchObj = {"_id":req.query.studentId};
   var updatedObj = {
      "firstName":req.body.firstName,
      "lastName":req.body.lastName,
      "email":req.body.email,
      "gender":req.body.gender,
      "phoneNumber":req.body.phoneNumber
   }
   var updateVal = await Students.updateStudent(matchObj,updatedObj);
   if(updateVal){
     return res.send(Common.successResponse('Successfully Updated!'));
   }else{
     return res.send(Common.errorResponse("badImplementation", "Error updating student"));
   }
}

//delete Student
exports.deleteStudent = async function(req,res){
   var matchObj ={"_id":req.query.studentId};
   var updatedObj = {
      "isDeleted": true
   }
   var deleteVal = await Students.deleteStudent(matchObj,updatedObj);
   if(deleteVal){
     return res.send(Common.successResponse('Successfully Deleted!'));
   }else{
     return res.send(Common.errorResponse("badImplementation", "Error deleting student"));
   }
}
