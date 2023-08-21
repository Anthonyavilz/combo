import './App.css';
import { Routes, Route } from 'react-router-dom'

import HomeHeader from './Components/mainAppComponents/HomeHeader';
import HomePage from './Components/mainAppComponents/HomePage';
import HomeFooter from './Components/mainAppComponents/HomeFooter';

import NarutoHeader from './Components/narutoComponents/MainPage/NarutoHeader';
import NarutoHomePage from './Components/narutoComponents/MainPage/NarutoHomePage';
import VillagePage from './Components/narutoComponents/MainPage/VillagePage';
import HandSigns from './Components/narutoComponents/MainPage/HandSigns';
import CreateJutsu from './Components/narutoComponents/MainPage/CreateJutsu';
import CloudVillage from './Components/narutoComponents/MainPage/Villages/CloudVillage';
import EarthVillage from './Components/narutoComponents/MainPage/Villages/EarthVillage';
import LeafVillage from './Components/narutoComponents/MainPage/Villages/LeafVillage';
import RainVillage from './Components/narutoComponents/MainPage/Villages/RainVillage';
import SandVillage from './Components/narutoComponents/MainPage/Villages/SandVillage';
import WaterVillage from './Components/narutoComponents/MainPage/Villages/WaterVillage';

import TotkHeader from './Components/totkComponents/MainPage/TotkHeader';
import TotkHomeScreen from './Components/totkComponents/MainPage/TotkHomePage';
import TotkFooter from './Components/totkComponents/MainPage/TotkFooter';
import AuthForm from './Components/totkComponents/MainPage/AuthForm';
import ArmorCreate from './Components/totkComponents/Armor/ArmorCreate';
import HelmPage from './Components/totkComponents/Armor/ArmorOptions/Helm/HelmPage';
import HelmDetails from './Components/totkComponents/Armor/ArmorOptions/Helm/HelmDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/homePage' element={<><HomeHeader/><HomeFooter/></>} >
          <Route index element={<HomePage/>} />
        </Route>
        <Route path='/naruto' element={<NarutoHeader/>}>
          <Route index element={<NarutoHomePage/>} />
          <Route path='homePage' element={<NarutoHomePage/>} />
          <Route path='handSigns' element={<HandSigns/>} />
          <Route path='createJutsu' element={<CreateJutsu/>} />
          <Route path='villages'>
            <Route index element={<VillagePage/>} />
            <Route path='leafVillage' element={<LeafVillage/>} />
            <Route path='sandVillage' element={<SandVillage/>} />
            <Route path='cloudVillage' element={<CloudVillage/>} />
            <Route path='earthVillage' element={<EarthVillage/>} />
            <Route path='waterVillage' element={<WaterVillage/>} />
            <Route path='rainVillage' element={<RainVillage/>} />
          </Route>
        </Route>
        <Route path='/totk' element={<><TotkHeader/><TotkFooter/></>} >
          <Route index element={<TotkHomeScreen/>} />
          <Route path='helmArmor' element={<HelmPage/>} />
          <Route path='helmArmor/:id' element={<HelmDetails/>} />
          <Route path='armorCreator' element={<ArmorCreate/>} />
          <Route path='auth' element={<AuthForm/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
