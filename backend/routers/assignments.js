const router = require('express').Router();
let Assignment = require('../model/assignments');

router.route('/').get((req,res) => {
  Assignment.find()
    .then(assignment => res.json(assignment))
    .catch(err => res.status(400).json('Error' + err));
})