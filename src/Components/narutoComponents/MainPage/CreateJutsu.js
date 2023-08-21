import { useState } from "react"
import axios from 'axios'
import Select from 'react-select'

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

const CreateJutsu = () => {

    const options = [
        {
            value: 'Saru/Monkey',
            image: Monkey,
            label: 'Monkey'
        },
        {
            value: 'Tastu/Dragon',
            image: Dragon,
            label: 'Dragon'
        },
        {
            value: 'Ne/Rat',
            image: Rat,
            label: 'Rat'
        },
        {
            value: 'Tori/Bird',
            image: Bird,
            label: 'Bird'
        },
        {
            value: 'Mi/Snake',
            image: Serpernt,
            label: 'Serpernet'
        },
        {
            value: 'Ushi/Ox',
            image: Ox,
            label: 'Ox'
        },
        {
            value: 'Inu/Dog',
            image: Dog,
            label: 'Dog'
        },
        {
            value: 'Uma/Horse',
            image: Horse,
            label: 'Horse'
        },
        {
            value: 'Tora/Tiger',
            image: Tiger,
            label: 'Tiger'
        },
        {
            value: 'I/Boar',
            image: Boar,
            label: 'Boar'
        },
        {
            value: 'Hitsuji/Ram',
            image: Ram,
            label: 'Ram'
        },
        {
            value: 'U/Hare',
            image: Hare,
            label: 'Hare'
        }
    ]

    const [userJutsus, setUserJutsus] = useState([])
    const [selectedOption, setSelectedOption] = useState([])
    const [jutsuEntry, setJutsuEntry] = useState('')

    const fetchJutsus = async () => {
        await
            axios
                .get('http://localhost:1234/naruto')
                .then((res) => {
                    console.log('line 92', res.data)
                    setUserJutsus(res.data)
                })
                .catch(err => console.log(err))
    }

    const handleSelectedOption = (selected) => {
        setSelectedOption(prev => [...prev, selected.label])
    }

    const handleJutsuName = (e) => {
        setJutsuEntry(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log('line 111', selectedOption[0])
        console.log('line 112', selectedOption[1])
        console.log('line 113', selectedOption[2])
        console.log('line 114', selectedOption[3])
        console.log('line 115', selectedOption[4])
        console.log('line 116', selectedOption[5])
        console.log('line 117', jutsuEntry)

        const submitBody = {
            sealOne: selectedOption[0],
            sealTwo: selectedOption[1],
            sealThree: selectedOption[2],
            sealFour: selectedOption[3],
            sealFive: selectedOption[4],
            sealSix: selectedOption[5],
            jutsuName: jutsuEntry
        }

        await
            axios
                .post('http://localhost:1234/naruto', submitBody)
                .then((res) => {
                    console.log(res.data)
                    // setUserJutsus(res.data)
                    fetchJutsus()
                    setSelectedOption([])
                    setJutsuEntry('')
                })
                .catch(err => console.log(err))
    }

    const handleDelete = async (id) => {
        await
            axios
                .delete(`http://localhost:1234/naruto/${id}`)
                .then(res => {
                    fetchJutsus()
                })
                .catch(err => {
                    console.log(err)
                })
    }


    const mappedJutsu = userJutsus.map((jutsu) => {
        return (
            <div className="tableHouse">
                <table>
                    <thead>
                        <tr className="jutsuHeader">
                            <td colSpan='2'>{jutsu.jutsuName}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="tableRowOne">
                            <td>{jutsu.sealOne}</td>
                            <td>{jutsu.sealTwo}</td>
                        </tr>
                        <tr className="tableRowTwo">
                            <td>{jutsu.sealThree}</td>
                            <td>{jutsu.sealFour}</td>
                        </tr>
                        <tr className="tableRowThree">
                            <td>{jutsu.sealFive}</td>
                            <td>{jutsu.sealSix}</td>
                        </tr>
                        <tr>
                            <td colSpan='2'><button onClick={() => handleDelete(jutsu.id)}>Delete</button></td> 
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    })

    const selectStyles = {
        container: provided => ({
            ...provided,
            width: '200px',
        }),
        control: provided => ({
            ...provided,
            backgroundColor: 'black',
            borderColor: 'white',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? 'gray' : 'black',
            color: 'white',
        }),
    };



    return (
        <div className="jutsuForm">
            <form onSubmit={handleSubmit}>
                <div className="firstRow">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Select
                            key={index}
                            value={selectedOption.image}
                            onChange={handleSelectedOption}
                            options={options}
                            formatOptionLabel={seals => (
                                <div className="selectImgContainer">
                                    <img src={seals.image} alt={seals.label} width='100px' height='100px' />
                                    <br/>
                                    <label>{seals.label}</label>
                                </div>
                            )}
                            styles={selectStyles}
                        />
                    ))}
                </div>
                <div className="secondRow">
                    <input type="text" value={jutsuEntry} onChange={handleJutsuName} placeholder="Enter Jutsu Name" />
                </div>
                <div className="thirdRow">
                    <button type="submit">Submit</button>
                </div>
            </form>
            <br/>
            {mappedJutsu.length >= 1 ? mappedJutsu 
            : 
            <div className="beforeCreation">
                <h1> Create a Jutsu Above!</h1>
            </div>
            }
        </div>
    )
}

export default CreateJutsu