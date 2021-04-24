const router = require('express').Router();
let Assignment = require('../model/assignments.model');

router.route('/').get((req,res) => {
  Assignment.find()
    .then(assignment => res.json(assignment))
    .catch(err => res.status(400).json('Error ' + err));
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

router.route('/:id').get((req, res) => {
  Assignment.findById(req.params.id)
    .then(assignment => res.json(assignment))
    .catch(err => res.status(400).json('Error ' + err));
})

router.route('/:id').delete((req, res) => {
  Assignment.findById(req.params.id)
    .then(() => res.json('Assignment Deleted'))
    .catch(err => res.status(400).json('Error ' + err));
})

router.route('/update/:id').post((req,res) => {
  Assignment.findById(req.params.id)
    .then(assignment => {
      assignment.assignmentName = req.body.assignmentName;
      assignment.assignmentLink = req.body.assignmentLink;
      assignment.assignmentDesc = req.body.assignmentDesc;

      assignment.save()
        .then(() => res.json('Assignment Updated'))
        .catch(err => res.status(400).json('Error ' + err))
    }).catch(err => res.status(400).json('Error ' + err))
});

module.exports = router;