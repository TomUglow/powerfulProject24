import React from 'react';
import Hero from './components/home/Hero'
import HeroBox from './components/home/HeroBox'
import HomeServices from './components/home/HomeServices'
import EmergencyContact from './components/home/EmergencyContact';
import PhotoGrid from './components/home/PhotoGrid';
import ServicesSummary from './components/home/ServicesSummary';
import Testimonials from './components/home/Testimonials';

const Home = () => {
    return (
        <div className="Home">
          <Hero />
          <HeroBox />
          <div className="hero-content">
          <HomeServices className="hero-services"/>
          <EmergencyContact className="emergency-contact"/>
          </div>
          <PhotoGrid />
          <ServicesSummary />
          <Testimonials className="testimonials"/>
        </div>
      );
    }

export default Home;
