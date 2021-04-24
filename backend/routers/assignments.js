const router = require('express').Router();
let Assignment = require('../model/assignments');

router.route('/').get((req,res) => {
  Assignment.find()
    .then(assignment => res.json(assignment))
    .catch(err => res.status(400).json('Error' + err));
})

router.route('/add').post((req,res) => {
  const assignmentName = req.body.assignmentName;
  const assignmentLink = req.body.assignmentLink;
  const assignmentDesc = req.body.assignmentDesc;

  const newAssignment = new Assignment({
    assignmentName,
    assignmentLink,
    assignmentDesc
  });

  newAssignment.save()
    .then(() => res.json('Assignment added'))
    .catch(err => res.status(400).json('Error ' + err));
})

module.exports = router;