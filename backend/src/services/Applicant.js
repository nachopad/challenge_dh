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
    findOne: async function (id) {
        try {
            return await db.Applicants.findByPk(id, {
                include: [{ association: "professions" }],
            });
        } catch (error) {
            console.error("Error al obtener el aspirante:", error);
        }
    },
    delete: async function (id) {
        try {
            return await db.Applicants.destroy({
                where: {
                    id: id,
                },
            });
        } catch (error) {
            console.error("Error al eliminar el aspirante:", error);
        }
    },
};

module.exports = Applicant;
