const express = require('express');
const router = express.Router();
const applicantController = require('../controllers/applicant.controller');

router.get('/', applicantController.list);

module.exports = router;