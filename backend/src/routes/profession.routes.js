const express = require('express');
const router = express.Router();
const professionController = require('../controllers/profession.controller');

router.get('/professions', professionController.list);

module.exports = router;
