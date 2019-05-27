'use strict';
/**
 * Subject Model
 **/
 var mongoose = require('mongoose'),
 Schema = mongoose.Schema;


 var subjectSchema = new Schema({
  subjectName : String,
  createdAt   : {
    type      : Date,
    default   : Date.now()
  }
});

module.exports = mongoose.model('subjects', subjectSchema);
