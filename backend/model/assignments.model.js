const mongoose = require('mongoose')
const schema = mongoose.Schema;

const assignmentSchema = new schema({
  assignmentName : {
    type : String,
    required : true,
    trim : true,
    minleght : 3
  },
  assignmentLink : {
    type : String,
    required : true,
  },
  assignmentDesc : {
    type : String
  }
}, {
  timestamps : true
});

const Assignment = mongoose.model('Assignment', assignmentSchema);
module.exports = Assignment;