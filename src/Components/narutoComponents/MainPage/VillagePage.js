import ImageMapper from 'reactjs-img-mapper'
import WorldMap from '../../../narutoImages/WorldMap.jpg'
import { useNavigate, Outlet } from 'react-router-dom'

const VillagePage = () => {

    const navigate = useNavigate();

    const URL = WorldMap;
    const MAP = {
        name: 'world-map',
        areas: [
            {
                name: 'Rain', shape: 'poly', coords: [340,477,374,469,405,452,402,494,414,505,411,515,436,529,476,523,474,570,422,590,351,559,363,513,352,504,353,489,341,479], preFillColor: 'white', fillColor: 'Blue'
            }
        ]
    }

    const handleRainAreaClick = (area, e) => {
        // e.preventDefault();
        navigate('rainVillage');
    };


    return (
        <div>
            <ImageMapper src={URL} map={MAP} onClick={handleRainAreaClick} />
            <Outlet/>
        </div>
    )
}

export default VillagePage