'use strict';
/**
 * User Model
 **/
 var mongoose = require('mongoose'),
 Schema = mongoose.Schema;

 var subjects = new Schema({
     "subjectId":{
         type:mongoose.Schema.ObjectId,ref:'subjects'
     }
 })

 var studentSchema = new Schema({
  firstName   : String,
  lastName    : String,
  email       : {
    type      : String,
    lowercase : true
  },
  gender      : {
    type      : String,
    enum      : ['female', 'male'],
    default   : 'female'
  },
  phoneNumber : String,
  isDeleted   : {
    type : Boolean,
    default: false
  },
  subjects : [subjects],
  createdAt   : {
    type      : Date,
    default   : Date.now()
  },
  updatedAt   :  {
    type      : Date,
    default   : Date.now()
  }
});

module.exports = mongoose.model('students', studentSchema);
