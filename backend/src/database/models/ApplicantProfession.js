module.exports = (sequelize, dataTypes) => {

    let alias = 'ApplicantProfessions';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        applicant_id: {
            type: dataTypes.INTEGER
        },
        profession_id: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: 'applicant_professions',
        timestamps: false
    };

    const ApplicantProfession = sequelize.define(alias, cols, config);

    return ApplicantProfession;
};