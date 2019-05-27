var subjects = require('./../models').subjects;
var teachers = require('./../models').teachers;

/*single api to add resource*/
exports.addResource = function(type,data) {
  return new Promise(function(resolve, reject) {
    if(type == 'Teacher'){
      teachers.create(data, function(err, data) {
        if(err){
          resolve(0);
        }else {
          resolve(data);
        }
      })
    }else{
      subjects.create(data, function(err, data) {
        if(err){
          resolve(0);
        }else {
          resolve(data);
        }
      })
    }
  });
}
