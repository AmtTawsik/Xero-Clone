import React from 'react';
import { Outlet } from 'react-router-dom';
import Drawer from '../Pages/Drawer/Drawer';
import Feature from '../Pages/Feature/Feature';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Header/Header';
import Hero from '../Pages/Hero/Hero';
import Prising from '../Pages/Prising/Prising';
import SideBar from '../Pages/SideBar/SideBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;