import Monkey from '../../../narutoImages/Monkey.jpg'
import Dragon from '../../../narutoImages/Dragon.jpg'
import Rat from '../../../narutoImages/Rat.jpg'
import Bird from '../../../narutoImages/Bird.jpg'
import Serpernt from '../../../narutoImages/Serpernt.jpg'
import Ox from '../../../narutoImages/Ox.jpg'
import Dog from '../../../narutoImages/Dog.jpg'
import Horse from '../../../narutoImages/Horse.jpg'
import Tiger from '../../../narutoImages/Tiger.jpg'
import Boar from '../../../narutoImages/Boar.jpg'
import Ram from '../../../narutoImages/Ram.jpg'
import Hare from '../../../narutoImages/Hare.jpg'

const HandSigns = () => {

    const seals = [
        {
            id: 1,
            name: 'Saru/Monkey',
            img: Monkey,
            description: 'Thumbs lie flat on pinkies'
        },
        {
            id: 2,
            name: 'Tastu/Dragon',
            img: Dragon,
            description: 'Left thumb on top'
        },
        {
            id: 3,
            name: 'Ne/Rat',
            img: Rat,
            description: 'Left thumb on the outside'
        },
        {
            id: 4,
            name: 'Tori/Bird',
            img: Bird,
            description: 'Be careful with the angle of the thumbs and the location of the fingertips'
        },
        {
            id: 5,
            name: 'Mi/Snake',
            img: Serpernt,
            description: 'Left thumb on the outside'
        },        
        {
            id: 6,
            name: 'Ushi/Ox',
            img: Ox,
            description: 'Right hand horizontal, left hand vertical'
        },        
        {
            id: 7,
            name: 'Inu/Dog',
            img: Dog,
            description: 'Left hand flat on the right fist'
        },        
        {
            id: 8,
            name: 'Uma/Horse',
            img: Horse,
            description: 'Both elbows out, index fingers form a triangle'
        },        
        {
            id: 9,
            name: 'Tora/Tiger',
            img: Tiger,
            description: 'Both thumbs straight up'
        },        
        {
            id: 10,
            name: 'I/Boar',
            img: Boar,
            description: 'Wrist need great flexibility'
        },        
        {
            id: 11,
            name: 'Hitsuji/Ram',
            img: Ram,
            description: 'Left thumb on top, hands together vertically'
        },        
        {
            id: 12,
            name: 'U/Hare',
            img: Hare,
            description: 'Aside from pinky, right fingers gently curled'
        }
    ]

    return (
        <div className='handSignContainer'>
                {seals.map(seal => {
                    return (
                        <div key={seal.id} className='sealsCard'>
                            <h1>{seal.name}</h1>
                            <img src={seal.img} alt={seal.name}/>
                            <h2>- {seal.description}</h2>
                        </div>
                    )
                })}
        </div>
    )
}

export default HandSigns