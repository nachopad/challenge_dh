let db = require('../database/models');

const Profession = {

    findAll: async function() {
        try {
            return await db.Professions.findAll();
        } catch (error) {
            console.error('Error al obtener las profesiones:', error);
          }
    },




}

module.exports = Profession;