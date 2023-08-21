let userJutsu = require('../../util/narutoDB.json')
let id = 1;
// let name = []
// let nameID = 1

module.exports = {
    createJu: (req, res) => {
        const {sealOne, sealTwo, sealThree, sealFour, sealFive, sealSix, jutsuName} = req.body;
        // console.log(req.body);
        userJutsu.push({
            id: id, 
            sealOne,
            sealTwo,
            sealThree,
            sealFour,
            sealFive,
            sealSix,
            jutsuName
        })
        id++;
        console.log(userJutsu)
        res.status(200).send(userJutsu);
    },

    // createName: (req, res) => {
    //     const { nameEntry } = req.body
    //     name.push({
    //         nameID: nameID,
    //         nameEntry
    //     })
    //     nameID++
    //     console.log(name)
    //     res.status(200).send(name)
    // },

    // getNames: (req, res) => {
    //     res.status(200).send(name)
    // },

    getJu: (req, res) => {
        res.status(200).send(userJutsu);
    },

    modifyJu: (req, res) => {
        const {sealOne, sealTwo, sealThree, sealFour, sealFive, sealSix, jutsuName} = req.body;
        const updateJutsuID = req.params.id;
        const jutsuIndex = userJutsu.findIndex(jutsu => jutsu.id == updateJutsuID);
        let jutsu = userJutsu[jutsuIndex];

        userJutsu[jutsuIndex] = {
            id: jutsu.id,
            sealOne: sealOne || jutsu.sealOne,
            sealTwo: sealTwo || jutsu.sealTwo,
            sealThree: sealThree || jutsu.sealThree,
            sealFour: sealFour || jutsu.sealFour,
            sealFive: sealFive || jutsu.sealFive,
            sealSix: sealSix || jutsu.sealSix,
            jutsuName: jutsuName || jutsu.jutsuName

        }
        res.status(200).send(userJutsu)
    },

    deleteJu: (req, res) => {
        const {id} = req.params;
        console.log(id);
        const index = userJutsu.findIndex(val => val.id == id)
        if (index === -1) {
            return res.status(400).json({message: 'jutsu not found'})
        }
        userJutsu.splice(index, 1);
        res.status(200).send(userJutsu);
    }
}