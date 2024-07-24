const applicantService = require('../services/Applicant');
const emailService = require('../services/emailService'); // Envio de email
const { validationResult } = require('express-validator');

const applicantApiController = {
    list: async (req, res) => {
        try {
            const applicants = await applicantService.findAll();
            res.status(200).json({
                meta: {
                    status: 200,
                    total: applicants.length,
                    url: "/api/applicants",
                },
                data: applicants,
            });
        } catch (error) {
            res.status(500).json({
                meta: {
                    status: 500,
                    error: "Internal server error",
                    url: "/api/applicants",
                },
            });
        }
    },
    listOne: async (req, res) => {
        try {
            const applicant = await applicantService.findOne(req.params.id);
            res.status(200).json({
                meta: {
                    status: 200,
                    url: `/api/applicants/${req.params.id}`,
                },
                data: applicant,
            });
        } catch (error) {
            res.status(500).json({
                meta: {
                    status: 500,
                    error: "Internal server error",
                    url: `/api/applicants/${req.params.id}`,
                },
            });
        }
    },
    delete: async (req, res) => {
        try {
            await applicantService.delete(req.params.id);
            res.status(200).json({
                meta: {
                    status: 200,
                    message: "Applicant deleted",
                    url: `/api/applicants/${req.params.id}`,
                },
            });
        } catch (error) {
            res.status(500).json({
                meta: {
                    status: 500,
                    error: "Internal server error",
                    url: `/api/applicants/${req.params.id}`,
                },
            });
        }
    },
    create: async (req, res) => {
        try {
            const error = validationResult(req);
            if (error.isEmpty()) {
                const newApplicant = await applicantService.create(req.body, req.file);
                res.status(201).json({
                    meta: {
                        status: 201,
                    },
                    data: newApplicant
                });

                // Enviar correo de confirmación
                await emailService.sendRegistrationEmail(newApplicant.email, newApplicant.first_name);
            } else {
                res.status(400).json({
                    meta: {
                        status: 400
                    },
                    error: error.mapped()
                });
            }
        } catch (error) {
            res.status(500).json({
                meta: {
                    status: 500,
                    error: 'Internal server error',
                }
            });
        }
    },
    update: async (req, res) => {
        try {
            await applicantService.update(req.params.id, req.body, req.file);
            return res.status(200).json({
                meta: {
                    status: 200
                },
                message: 'El aplicante se modifico correctamente'
            });
        } catch (error) {
            return res.status(500).json({
                meta: {
                    status: 500,
                    error: 'Internal server error'
                }
            });
        }
    }
};

module.exports = applicantApiController;
