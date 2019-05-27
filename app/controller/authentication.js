var Users = require('./../../services/users');
var Boom = require('boom');
var Common = require('./../config/common');
var Jwt = require('jsonwebtoken');


/* registration */
exports.registration = async function(req, res) {
  var payloadData = req.body;
  var userInfo = {};
    userInfo.email = (payloadData.email != '' ? payloadData.email : '');
    userInfo.userName = (payloadData.userName != '' ? payloadData.userName : '');
    userInfo.phoneNumber = (payloadData.phoneNumber != '' ? payloadData.phoneNumber : '');

    var validateUser = await Users.findUser(userInfo.email);
    if(validateUser && validateUser.length){
        res.send(Common.errorResponse("forbidden", "Please provide another user email"));
    }else{
        userInfo.password = Common.encrypt(payloadData.password);
        var createUser = await Users.createUser(userInfo);
        if(createUser){
          var tokenData = {
              name: createUser.userName,
              id: createUser._id,
              tokenTime:new Date()
          };
          createUser.token = Common.getToken(tokenData);
          if(createUser){
            res.send(Common.successResponse('User created successfully.', createUser));
          }
        }else{
          if (11000 === err.code || 11001 === err.code) {
              res.send(Common.errorResponse("forbidden", "Please provide another user email"));
          } else res.send(Common.errorResponse("forbidden", err));
        }
    }
}


/* login*/
exports.login = async function (req, res) {
  let email = req.body.email;
  let findUser = await Users.findUser(email);
  if(findUser){
      if (findUser === null) return res.send(Common.errorResponse("forbidden", "Invalid username or password"));
      if (req.body.password === Common.decrypt(findUser.password)) {
          var tokenData = {
              name: findUser.userName,
              id: findUser._id
          };
          var token = Common.getToken(tokenData);
          var newObject = JSON.parse(JSON.stringify(findUser));
          newObject.token = token;
          newObject = Common.customeResponse(['createdAt', 'updatedAt','__v'], newObject)
          return res.send(Common.successResponse('Successfully authenticated!', newObject));
      } else res.send(Common.errorResponse("forbidden", "Invalid username or password."));
  } else {
      if (11000 === err.code || 11001 === err.code) {
          return res.send(Common.errorResponse("forbidden", "Please provide another user email"));
      } else {
          console.error(err);
          return res.send(Common.errorResponse("badImplementation", err));
      }
  }
}
//END
