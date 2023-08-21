import './helm.css'
import { useNavigate } from 'react-router-dom'

const HelmCard = ({helmOptions}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/helmArmor/${helmOptions.helm_id}`)
    }

    return (
        <div className="recipeCard" onClick={handleClick}>
            <img src={helmOptions.helmURL} alt=''/>
            <h3>{helmOptions.helmName}</h3>
        </div>
    )
}

export default HelmCard
