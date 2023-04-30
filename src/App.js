import React from 'react';
import './App.css';
import NavbarPage from './components/Navbar/NavbarPage';
import BannerPage from './components/Banner/BannerPage';
import HeroPage from './components/Hero/HeroPage';
import FooterPage from './components/Footer/FooterPage';
import HeaderPage from './components/header/HeaderPage';
import FooterBanner from './components/Footer/FooterBanner';

const App = () => {
  return (
    <>
    
    <HeaderPage />    {/* Top Header with LOgo */}
    <NavbarPage />    {/* Navbar with Icons and using Absolute Positioning */}
    <BannerPage />    {/* Banner Dhamaka Offer */}
    <HeroPage />      {/* Hero with Image and Heading and Information */}
    <FooterBanner />  {/* Footer banner vehical details */}
    <FooterPage />    {/* bottom footer with socail media icons */}
    </>
  )
}

export default App
