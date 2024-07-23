const professionService = require('../services/Profession');

const professionApiController = {
    list: async (req, res) => {
        try {
            const professions = await professionService.findAll();
            res.status(200).json(professions);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = professionApiController;
