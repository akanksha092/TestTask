//Student CRUD Operation
var Teachers = require('./../../services/teacher-subject');
var Boom = require('boom');
var Common = require('./../config/common');


//Add Resource
exports.addResource = async function(req,res){
   let type = req.body.type;
   if(type == 'Teacher'){
      var teacherObj = {
        teacherName:req.body.teacherName,
        email:req.body.email,
        gender:req.body.gender,
        phoneNumber:req.body.phoneNumber
      }
      var teachers = await Teachers.addResource(type,teacherObj);
      if(teachers){
         return res.send(Common.successResponse('Successfully Created!', teachers));
      }else{
        return res.send(Common.errorResponse("badImplementation", "Error creating Teacher"));
      }
   }else{
     var subjectObj = {
        subjectName:req.body.subjectName
     }
     var subjects = await Teachers.addResource(type,subjectObj);
     if(subjects){
        return res.send(Common.successResponse('Successfully Created!', subjects));
     }else{
       return res.send(Common.errorResponse("badImplementation", "Error creating Subjects"));
     }
   }
}
//END
