var students = require('./../models').students;

/*function to add student*/
exports.addStudent = function(data) {
  return new Promise(function(resolve, reject) {
    students.create(data, function(err, data) {
      if(err){
        resolve(0);
      }else {
        resolve(data);
      }
    })
  });
}

/*function to get particular student detail*/
exports.getStudentDetail = function(id) {
  return new Promise(function(resolve, reject) {
    students.findOne({"_id":id}).exec(function(err, data) {
      if(err){
        resolve(0);
      }else {
        resolve(data);
      }
    })
  });
}

/*function to update student details*/
exports.updateStudent = function(matchObj,updatedObj) {
  return new Promise(function(resolve, reject) {
    students.update(matchObj,updatedObj).exec(function(err, data) {
      if(err){
        resolve(0);
      }else {
        resolve(data);
      }
    })
  });
}

/*function to delete student details*/
exports.deleteStudent = function(matchObj,updatedObj) {
  return new Promise(function(resolve, reject) {
    students.update(matchObj,updatedObj).exec(function(err, data) {
      if(err){
        resolve(0);
      }else {
        resolve(data);
      }
    })
  });
}
