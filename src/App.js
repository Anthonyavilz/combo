import './App.css';
import { useRoutes, Outlet, Link } from 'react-router-dom'

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

  const routes = useRoutes([
    {
      path: '/',
      element: (
        <>
        <HomeHeader/>
        <Outlet/>
        <HomeFooter/>
        </>
      ),
      children: [
        { index: true, element: <HomePage /> },
      ],
    },
    {
      path: '/naruto',
      element: (
        <>
        <NarutoHeader/>
        <Outlet/>
        </>
      ),
      children: [
        { index: true, element: <NarutoHomePage /> },
        { path: 'handSigns', element: <HandSigns /> },
        { path: 'createJutsu', element: <CreateJutsu /> },
        {
          path: 'villages',
          element: <Outlet />,
          children: [
            { index: true, element: <VillagePage /> },
            { path: 'leafVillage', element: <LeafVillage /> },
            { path: 'sandVillage', element: <SandVillage /> },
            { path: 'rainVillage', element: <RainVillage/> }
            // Add other village routes...
          ],
        },
      ],
    },
    {
      path: '/totk',
      element: (
        <>
          <TotkHeader />
          <Outlet />
          <TotkFooter />
        </>
      ),
      children: [
        { index: true, element: <TotkHomeScreen /> },
        { path: 'helmArmor', element: <HelmPage /> },
        { path: 'helmArmor/:id', element: <HelmDetails /> },
        { path: 'armorCreator', element: <ArmorCreate /> },
        { path: 'auth', element: <AuthForm /> },
      ],
    },
  ]);

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
