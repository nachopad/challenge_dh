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
};

module.exports = applicantApiController;
