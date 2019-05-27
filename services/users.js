var users = require('./../models').users;

/*function to create the user*/
exports.createUser = function(data) {
  return new Promise(function(resolve, reject) {
    users.create(data, function(err, data) {
      if(err){
        resolve(0);
      }else {
        resolve(data);
      }
    })
  });
}

/*function to find the user*/
exports.findUser = function(email) {
  return new Promise(function(resolve, reject) {
    users.findOne({'email':email}).exec(function(err,data){
      if(err){
        resolve(0);
      }else {
        resolve(data);
      }
    })
  });
}
