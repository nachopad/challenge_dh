const { body } = require('express-validator');
const Applicant = require('../../services/Applicant');

const validations = [
    body('dni').notEmpty().withMessage("Debes ingresar un dni valido").bail()
        .custom(async (value, { req }) => {
            const { dni } = req.body;
            let applicantRegister = await Applicant.findByField('dni', dni)
            if (applicantRegister) {
                throw new Error('Ya existe un aspirante vinculado al dni ingresado.');
            };
            return true;
        }),
    body('firstName').notEmpty().withMessage('Debes ingresar un nombre.'),
    body('lastName').notEmpty().withMessage('Debes ingresar un apellido.'),
    body('birthdate')
        .optional({ checkFalsy: true })//Permite que este campo sea opcional
        .isAfter('1900-01-01').withMessage('La fecha de nacimiento debe ser posterior al 01/01/1900.')
        .isBefore(new Date().toISOString().split('T')[0]).withMessage('La fecha de nacimiento no puede ser superior a la fecha actual.'),
    body('phone').notEmpty().withMessage('Debes ingresar un número de teléfono.'),
    body('email')
        .notEmpty().withMessage('Debes ingresar un e-mail.').bail()
        .isEmail().withMessage('Debes ingresar un formato de e-mail válido.').bail()
        .custom(async (value, { req }) => {
            const { email } = req.body;
            let applicantRegister = await Applicant.findByField('email', email)
            if (applicantRegister) {
                throw new Error('Ya existe un aspirante vinculado al e-mail ingresado.');
            };

            return true;
        }),
    body('image')
        .optional({ checkFalsy: true })
        .custom(async (value, { req }) => {
            const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif'];
            if (req.body.error) {
                throw new Error(`Las extensiones válidas de imagen son ${allowedFileTypes.join(', ')}`);
            };
            return true;
        })
];

module.exports = validations;