'use strict';
/**
 * subject teacher relationships Model
 **/
 var mongoose = require('mongoose'),
 Schema = mongoose.Schema;


 var subjectRelationship = new Schema({
  subjectName : String,
  teacherId : {type: mongoose.Schema.ObjectId,ref:"teachers"},
  students : [{type:mongoose.Schema.ObjectId,ref:"students"}],
  createdAt   : {
    type      : Date,
    default   : Date.now()
  }
});

module.exports = mongoose.model('relationships', subjectRelationship);
