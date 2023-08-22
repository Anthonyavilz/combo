require('dotenv').config()

const express = require('express')
const cors = require('cors')

const naurtoApp = express()
const totkApp = express()

naurtoApp.use(express.json())
naurtoApp.use(cors())

totkApp.use(express.json())
totkApp.use(cors())

// Naruto Functions & Endpoints
const { createJu, getJu, modifyJu, deleteJu } = require('./controllers/narutoControllers/userJutsu')

const narutoPort = 1234

naurtoApp.post('/naruto', createJu)
naurtoApp.get('/naruto', getJu)
naurtoApp.put('/naruto/:id', modifyJu)
naurtoApp.delete('/naruto/:id', deleteJu)

// Sequelize Call
const { sequelize } = require('./util/db')

// ToTK Functions, Models, Seed file, & Endpoints
const { User, Helm, Chest, Leg, ArmorSet } = require('./models/totkModels/totkModels')
const { getHelms, getChestArmor, getLegArmor, addArmorSet, getArmorSets, getSelectedHelm } = require('./controllers/totkControllers/armor')
const seed = require('./util/totkSeed')

const totkPort = 5678

totkApp.get('/helms', getHelms)
totkApp.get('/chest', getChestArmor)
totkApp.get('/leg', getLegArmor)

totkApp.post('/armorset', addArmorSet)
totkApp.get('/sets/:id', getArmorSets)
totkApp.get('/helmArmor/:id', getSelectedHelm)

sequelize
    .sync()
    // .then(() => {
    //     console.log('tables and data sent')
    //     seed()
    // })
    .then(() => {
        console.log('tables sent')
    })
    .catch((err) => {
        console.log('connection error')
    })



// Port Listens
naurtoApp.listen(narutoPort, () => console.log(`Naruto Running at ${narutoPort}`));
totkApp.listen(totkPort, () => console.log(`Saving Zelda on ${totkPort}`))