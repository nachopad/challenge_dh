const applicantService = require("../services/Applicant");

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
    }
};

module.exports = applicantApiController;
