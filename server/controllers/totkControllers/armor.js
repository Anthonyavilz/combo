const { Helm, Chest, Leg, ArmorSet } = require('../../models/totkModels/totkModels')

module.exports = {
    getHelms: async (req, res) => {
        try {
            const helms = await Helm.findAll();
            res.status(200).send(helms);
        } catch (err) {
            console.log(err);
        }
    },
    
    getChestArmor: async (req, res) => {
        try {
            const chestArmor = await Chest.findAll();
            res.status(200).send(chestArmor);
        } catch (err) {
            console.log(err);
        }
    },
    
    getLegArmor: async (req, res) => {
        try {
            const legArmor = await Leg.findAll();
            res.status(200).send(legArmor);
        } catch (err) {
            console.log(err);
        }
    },

    addArmorSet: async (req, res) => {
        try {
            const { nameEntry, helmEntry, chestEntry, legEntry } = req.body
            const newArmorSet = await ArmorSet.create({
                armorName: nameEntry, 
                helmArmor_id: helmEntry, 
                chestArmor_id: chestEntry, 
                legArmor_id: legEntry
            })
            res.sendStatus(200)
            console.log('line 41', newArmorSet)
        } catch (err) {
            console.log('armor Not added', err)
            res.sendStatus(400)
        }
    },

    getArmorSets: async (req, res) => {
        try {
            const { id } = req.params
            const sets = await ArmorSet.findAll({
                where: {armorSet_id: id},
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

    getSelectedHelm: async (req, res) => {
        try {
            const { id } = req.params
            const helms = await Helm.findOne({
                where: {helm_id: id},
            })
            res.status(200).send(helms)
        } catch (error) {
            console.log('error in getSelected', error)
        }
    },
    // above, I needed to do findOne because that would return an object. findAll would return an array so on the frontend I would have to use the [0] to get that one instance
}