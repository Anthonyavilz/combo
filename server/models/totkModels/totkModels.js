const { DataTypes } = require('sequelize')
const { sequelize } = require('../../util/db')

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING({length: 35}),
    password: DataTypes.STRING
})

const Helm = sequelize.define('Helm', {
    helm_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    helmName: DataTypes.STRING,
    helmURL: DataTypes.TEXT,
    helmDefense: DataTypes.INTEGER,
    helmLocation: DataTypes.STRING,
    helmLocationURL: DataTypes.TEXT,
    helmEffect: DataTypes.STRING
})

const Chest = sequelize.define('Chest', {
    chest_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    chestName: DataTypes.STRING,
    chestURL: DataTypes.TEXT,
    chestDefense: DataTypes.INTEGER,
    chestLocation: DataTypes.STRING,
    chestLocationURL: DataTypes.TEXT,
    chestEffect: DataTypes.STRING
})

const Leg = sequelize.define('Leg', {
    leg_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    legName: DataTypes.STRING,
    legURL: DataTypes.TEXT,
    legDefense: DataTypes.INTEGER,
    legLocation: DataTypes.STRING,
    legLocationURL: DataTypes.TEXT,
    legEffect: DataTypes.STRING
})

const ArmorSet = sequelize.define('ArmorSet', {
    armorSet_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    armorName: DataTypes.STRING({length: 25})
});


ArmorSet.belongsTo(Helm, { foreignKey: 'helmArmor_id' });
ArmorSet.belongsTo(Chest, { foreignKey: 'chestArmor_id' });
ArmorSet.belongsTo(Leg, { foreignKey: 'legArmor_id' });
ArmorSet.belongsTo(User, { foreignKey: 'totk_user' })

const Favorites = sequelize.define('Favorites', {
    favorites_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

Favorites.belongsTo(ArmorSet, {foreignKey: 'usersFavorite'})

module.exports = {User, Helm, Chest, Leg, ArmorSet, Favorites}