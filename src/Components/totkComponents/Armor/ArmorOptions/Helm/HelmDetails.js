import axios from "axios"
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const HelmDetails = () => {

    const { id } = useParams()

    const [helm, setHelm] = useState({})

    const getSelectedHelm = async () => {
        await
            axios
                .get(`/helmArmor/${id}`)
                .then(res => {
                    setHelm(res.data)
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
    }

    console.log(helm)

    useEffect(() => {
        getSelectedHelm()
    }, [])

    return (
        <div>
            <h1>{helm.helmName}</h1>
            <img src={helm.helmURL} alt=""/>
            <h1>{helm.helmDefense}</h1>
            <h1>{helm.helmLocation}</h1>
            <a href={helm.helmLocationURL} target="_blank" rel="noopener noreferrer">{helm.helmLocation}</a>
            <h1>{helm.helmEffect}</h1>
        </div>
    )
}

export default HelmDetails