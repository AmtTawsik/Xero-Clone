import React from 'react';
import Hero from '../Hero/Hero';
import Feature from '../Feature/Feature';
import Accordian from '../Accordian/Accordian';
import Carasol from '../Carasol/Carasol';
import CTA from '../CTA/CTA';
import Social from '../Social/Social';
import Prising from '../Prising/Prising';
import ContactUs from '../ContactUs/ContactUs';
import Smarter from '../Smarter/Smarter';
import Money from '../Money/Money';
import Subscribe from '../Subscribe/Subscribe';
import HMRC from '../HMRC/HMRC';
import Automated from '../Automated/Automated';
import Self from '../Self/Self';
import Subscribers from '../Subscribers/Subscribers';
import FaQ from '../FaQ/FaQ';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HMRC></HMRC>
            <Automated></Automated>
            <Self></Self>
            <Prising></Prising>
            <Subscribers></Subscribers>
            <Subscribe></Subscribe>
            <Slider></Slider>
            <FaQ></FaQ>
            
        </div>
    );
};

export default Home;