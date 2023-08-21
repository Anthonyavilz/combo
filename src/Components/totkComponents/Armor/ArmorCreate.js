import { useState, useEffect } from 'react'
import axios from 'axios'


const ArmorCreate = () => {

    const [helmOptions, setHelmOptions] = useState([])
    const [chestOptions, setChestOptions] = useState([])
    const [legOptions, setLegOptions] = useState([])
    const [selectedHelm, setSelectedHelm] = useState('');
    const [selectedChest, setSelectedChest] = useState('');
    const [selectedLeg, setSelectedLeg] = useState('');
    const [selectedArmorSetName, setSelectedArmorSetName] = useState('')

    const fetchHelms = async () => {
        await 
            axios
                .get('/helms')
                .then(res => {
                    setHelmOptions(res.data)
                    // console.log('line 16', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
    }

    const fetchChest = async () => {
        await 
            axios
                .get('/chest')
                .then(res => {
                    setChestOptions(res.data)
                    // console.log('line 29', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
    }

    const fetchLeg = async () => {
        await 
            axios
                .get('/leg')
                .then(res => {
                    setLegOptions(res.data)
                    // console.log('line 42', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
    }

    useEffect(() => {
        fetchHelms()
        fetchChest()
        fetchLeg()
    }, [])

    const handleHelmChange = (e) => {
        setSelectedHelm(e.target.value);
    };
    
    const handleChestChange = (e) => {
        setSelectedChest(e.target.value);
    };

    const handleLegChange = (e) => {
        setSelectedLeg(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        console.log('line 75', selectedArmorSetName)
        console.log('line 76', +selectedHelm)
        console.log('line 77', +selectedChest)
        console.log('line 78', +selectedLeg)

        const armorObj = {
            nameEntry: selectedArmorSetName,
            helmEntry: +selectedHelm,
            chestEntry: +selectedChest,
            legEntry: +selectedLeg
        }

        await
            axios
                .post('/armorset', armorObj)
                .then((res) => {
                    console.log(res.data)
                    setSelectedHelm('')
                    setSelectedChest('')
                    setSelectedLeg('')
                    setSelectedArmorSetName('')
                })
                .catch(err => {
                    console.log(err)
                })

    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <select value={selectedHelm} onChange={handleHelmChange}>
                    <option value=''>Select...</option>
                    {helmOptions.map((helm) => (
                        <option key={helm.helm_id} value={helm.helm_id}>{helm.helmName}</option>
                    ))}
                </select>
                <select value={selectedChest} onChange={handleChestChange}>
                    <option value=''>Select...</option>
                    {chestOptions.map((chest) => (
                        <option key={chest.chest_id} value={chest.chest_id}>{chest.chestName}</option>
                    ))}
                </select>
                <select value={selectedLeg} onChange={handleLegChange}>
                    <option value=''>Select...</option>
                    {legOptions.map((leg) => (
                        <option key={leg.leg_id} value={leg.leg_id}>{leg.legName}</option>
                    ))}
                </select>
                <input
                    type='text'
                    placeholder='Armor Set Name'
                    value={selectedArmorSetName}
                    onChange={(e) => setSelectedArmorSetName(e.target.value)}
                />
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default ArmorCreate