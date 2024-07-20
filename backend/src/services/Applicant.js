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
    create: async function(applicantData, image){
        try {
            let newApplicant = await db.Applicants.create({
                dni: applicantData.dni,
                first_name: applicantData.firstName,
                last_name: applicantData.lastName,
                email: applicantData.email,
                phone: applicantData.phone ? applicantData.phone : null,
                url_linkedin: applicantData.urlLinkedin ? applicantData.urlLinkedin : null,
                birthdate: applicantData.birthdate ? applicantData.birthdate : null,
                image: image ? image.filename : null,
                gender: applicantData.gender ? applicantData.gender : null,
            });
            await db.ApplicantProfessions.create({ applicant_id: newApplicant.id, profession_id: applicantData.profession });
            return newApplicant;
        } catch (error) {
            throw new Error("Error al crear al aspirante: ", error);
        }
    },
    findByField: async function(field, text){
        try {
            return await db.Applicants.findOne({
                where: {[field]: text}
            });
        } catch (error) {
            throw new Error("Error al obtener el aspirante: ",error)
        }
    },
    update: async function(id , applicantData, image){
        try {
            let applicantToUpdate = await this.findOne(id);
            return await db.Applicants.update({
                dni: applicantData.dni,
                first_name: applicantData.firstName,
                last_name: applicantData.lastName,
                email: applicantData.email,
                phone: applicantData.phone ? applicantData.phone : applicantToUpdate.phone,
                url_linkedin: applicantData.urlLinkedin ? applicantData.urlLinkedin :applicantToUpdate.url_linkedin,
                birthdate: applicantData.birthdate ? applicantData.birthdate : applicantToUpdate.birthdate,
                image: image ? image.filename : applicantToUpdate.image,
            }, {where: {id: id}});
        } catch (error) {
            throw new Error("Error al modificar al aspirante: ", error);
        }
    }
};

module.exports = Applicant;
