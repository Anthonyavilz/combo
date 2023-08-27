const { Helm, Chest, Leg } = require('../../models/totkModels/totkModels')

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
    
    getSelectedChest: async (req, res) => {
        try {
            const { id } = req.params
            const helms = await Chest.findOne({
                where: {chest_id: id},
            })
            res.status(200).send(helms)
        } catch (error) {
            console.log('error in getSelected', error)
        }
    },

    getSelectedLeg: async (req, res) => {
        try {
            const { id } = req.params
            const helms = await Leg.findOne({
                where: {leg_id: id},
            })
            res.status(200).send(helms)
        } catch (error) {
            console.log('error in getSelected', error)
        }
    },
}