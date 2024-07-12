const express = require('express');
const router = express.Router();
const applicantController = require('../controllers/applicant.controller');

router.get('/', applicantController.list);
router.get('/:id', applicantController.listOne);
router.delete('/:id', applicantController.delete);

module.exports = router;