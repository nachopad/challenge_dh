const express = require('express');
const router = express.Router();
const applicantController = require('../controllers/applicant.controller');
const registerValidation = require('../middlewares/route-middlewares/validationApplicantRegister');
const uploadFile = require('../middlewares/route-middlewares/applicantRegisterMulter');

router.get('/', applicantController.list);
router.get('/:id', applicantController.listOne);
router.delete('/:id', applicantController.delete);
router.post('/register', uploadFile.single('image') ,  registerValidation, applicantController.create);
router.put('/update/:id', applicantController.update);

module.exports = router;