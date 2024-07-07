let db = require("../database/models");

const Applicant = {
    findAll: async function () {
        try {
            return await db.Applicants.findAll({
                include: [{ association: "professions" }],
            });
        } catch (error) {
            console.error("Error al obtener los aspirantes:", error);
        }
    },
};

module.exports = Applicant;
