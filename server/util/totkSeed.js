const { Helm, Chest, Leg } = require('../models/totkModels/totkModels')

const seed = async () => {
    await Helm.bulkCreate([
        {
            helmName: 'Mask of Awakening',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/mask_of_awakening_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 3,
            helmLocation: 'Thundra Plateau',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280863',
            helmEffect: 'None'
        },     
        {
            helmName: 'Barbarian Helm',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/barbarian_helm-armor-zelda-totk-wiki-guide.png',
            helmDefense: 3,
            helmLocation: 'Robred Dropoff Cave', 
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279726',
            helmEffect: 'Attack Up'
        },
    ])
    await Chest.bulkCreate([
        {
            chestName: 'Tunic of Awakening',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/tunic_of_awakening_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 3,
            chestLocation: 'Ancient Columns',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280855',
            chestEffect: 'None'
        }
    ])
    await Leg.bulkCreate([
        {
            legName: 'Trousers of Awakening',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/trousers_of_awakening_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 3,
            legLocation: 'Coliseum Ruins',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280868',
            legEffect: 'None'
        }
    ])
    console.log('seed file done!')
}

module.exports = seed