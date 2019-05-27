'use strict';
/**
 * Teacher Model
 **/
 var mongoose = require('mongoose'),
 Schema = mongoose.Schema;


 var subjects = new Schema({
     "subjectId":{
         type:mongoose.Schema.ObjectId,ref:'subjects'
     }
 })

 var teacherSchema = new Schema({
  teacherName   : String,
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
  subjects : [subjects],
  isDeleted   : {
    type : Boolean,
    default: false
  },
  createdAt   : {
    type      : Date,
    default   : Date.now()
  },
  updatedAt   :  {
    type      : Date,
    default   : Date.now()
  }
});

module.exports = mongoose.model('teachers', teacherSchema);
