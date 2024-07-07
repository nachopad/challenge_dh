module.exports = (sequelize, dataType) => {
    let alias = "Applicants";

    let cols = {
        id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dni: {
            type: dataType.STRING(8),
            allowNull: false,
        },
        first_name: {
            type: dataType.STRING(15),
            allowNull: false,
        },
        last_name: {
            type: dataType.STRING(25),
            allowNull: false,
        },
        email: {
            type: dataType.STRING(30),
            allowNull: false,
        },
        phone: {
            type: dataType.STRING(20),
            allowNull: true,
        },
        url_linkedin: {
            type: dataType.STRING(100),
            allowNull: true,
        },
        birthdate: {
            type: dataType.DATE,
            allowNull: true,
        },
        gender: {
            type: dataType.STRING(20),
            allowNull: true,
        },
        image: {
            type: dataType.STRING(200),
            allowNull: true,
        },
    };

    let config = {
        tableName: "applicants",
        timestamps: false,
    };

    const Applicant = sequelize.define(alias, cols, config);

    Applicant.associate = (models) => {
        Applicant.belongsToMany(models.Professions, {
            as: "professions",
            through: "applicant_professions",
            foreignKey: "applicant_id",
            otherKey: "profession_id",
            timestamps: false,
        });
    };

    return Applicant;
};
