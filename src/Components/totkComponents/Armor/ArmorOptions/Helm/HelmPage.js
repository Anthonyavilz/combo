import axios from "axios"
import { useState, useEffect } from 'react'

import HelmCard from "./HelmCard"

const HelmPage = () => {

    const [helms, setHelms] = useState([])
    const [search, setSearch] = useState('')

    const fetchHelms = async () => {
        await 
            axios
                .get('/helms')
                .then(res => {
                    setHelms(res.data)
                    // console.log('line 16', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
    }

    useEffect(() => {
        fetchHelms()
    }, [])

    console.log('line 26', helms)

    const helmDisplay = helms.filter(helmOptions => {
        let title = helmOptions.helmName.toLowerCase()
        let searchParams = search.toLowerCase()
        return title.includes(searchParams)
    })
    .map(helmOptions => {
        return <HelmCard helmOptions={helmOptions}/>
    })

    return (
        <div>
            <span className='searchBar'>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for a Helm"
            />
            </span>
            <div>
                {helmDisplay}
            </div>
        </div>
    )
}

export default HelmPage