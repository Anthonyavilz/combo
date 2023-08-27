const { Helm, Chest, Leg, ArmorSet, Favorites } = require('../../models/totkModels/totkModels')

module.exports = {
    addArmorSet: async (req, res) => {
        try {
            const { nameEntry, helmEntry, chestEntry, legEntry, userId } = req.body
            const newArmorSet = await ArmorSet.create({
                armorName: nameEntry, 
                helmArmor_id: helmEntry, 
                chestArmor_id: chestEntry, 
                legArmor_id: legEntry,
                totk_user: userId
            })
            console.log('line 41', newArmorSet.toJSON())
            res.sendStatus(200)
        } catch (err) {
            console.log('armor Not added', err)
            res.sendStatus(400)
        }
    },

    usersFavorite: async (req, res) => {
        try {
            const { armorSetId } = req.body

            const armorSet = await ArmorSet.findByPk(armorSetId)
            if(!armorSet) {
                return res.status(400).send('Armor set not found')
            }

            const newFavorite = await Favorites.create({
                usersFavorite: armorSetId
            })
            console.log('userFavorite', newFavorite.toJSON())
            res.sendStatus(200)
        } catch (error) {
            console.log('error in userFavorite', error)
            res.sendStatus(400)
        }
    },

    getArmorSets: async (req, res) => {
        try {
            const { id } = req.params
            const sets = await ArmorSet.findAll({
                where: {totk_user: id},
                include: [
                {
                    model: Helm,
                    attributes: ['helmName', 'helmURL', 'helmDefense', 'helmLocation', 'helmLocationURL', 'helmEffect']
                }, 
                {
                    model: Chest,
                    attributes: ['chestName', 'chestURL', 'chestDefense', 'chestLocation', 'chestLocationURL', 'chestEffect']
                },
                {
                    model: Leg,
                    attributes: ['legName', 'legURL', 'legDefense', 'legLocation', 'legLocationURL', 'legEffect']
                }
            ]
            });
            res.status(200).send(sets)
        } catch (error) {
            console.log(error)
        }
    },
    // above, we can use the same format for when we get a userID and then also the favorites table. We can display/get all the information because it is associated with the number we've sent here/to the backend.

    getUsersFavorite: async (req, res) => {
        try {
            const { userId } = req.params
            const favorites = await Favorites.findAll({
                where: {usersFavorite: userId},
                include: {
                    model: ArmorSet,
                    include: [
                        { model: Helm },
                        { model: Chest },
                        { model: Leg }
                    ]
                }
            })
            res.status(200).send(favorites)
        } catch (error) {
            console.log('error in getUsersFavorite', error)
            res.sendStatus(400)
        }
    },
}