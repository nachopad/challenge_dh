module.exports = (sequelize, dataType) => {

    let alias = 'Professions';

    let cols = {
        id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: dataType.STRING(50),
            allowNull: false
        },
        description:{
            type: dataType.STRING(80),
            allowNull: false
        }
    };

    let config = {
        tableName: 'professions',
        timestamps: false
    };

    const Profession = sequelize.define(alias, cols, config);
    
    return Profession;

};
