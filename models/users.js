'use strict';
/**
 * User Model
 **/
 var mongoose = require('mongoose'),
 Schema = mongoose.Schema;

 var userSchema = new Schema({
  userName    : String,
  email       : {
    type      : String,
    lowercase : true
  },
  password:String,
  createdAt   : {
    type      : Date,
    default   : Date.now()
  },
  updatedAt   :  {
    type      : Date,
    default   : Date.now()
  }
});

module.exports = mongoose.model('users', userSchema);
