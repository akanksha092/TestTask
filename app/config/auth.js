
var config = require('./config.js');
var jwt = require('jsonwebtoken');
exports.auth = function(req, res, next){
        var token = req.body.token || req.headers['x-access-token'];
        // decode token
        if (token) {
          console.log("token",token)
          // verifies secret and checks exp
          jwt.verify(token,process.env.JWT, function(err, decoded) {
            if (err) {
              console.log("err",err)
              return res.json({ code: 403, message: 'Failed to authenticate token.', keyValue: false});
            } else {
              // if everything is good, save to request for use in other routes
              req.decoded = decoded;
              next();
            }
          });
        } else {

          return res.status(403).send({
              success: false,
              message: 'No token provided.'
          });

        }
};
