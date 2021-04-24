const mongoose = require('mongoose')
const schema = mongoose.Schema;

const assignmentSchema = new schema({
  assignmentName : {
    type : String,
    required : 'Name cannot be empty',
    trim : true,
    minleght : 3
  },
  assignmentLink : {
    type : String,
    required : 'Assignment link cannot be empty!!!',
  },
  assignmentDesc : {
    type : String
  }
}, {
  timestamps : true
});

const Assignment = mongoose.model('Assignment', assignmentSchema);
module.exports = Assignment;