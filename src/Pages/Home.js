import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './components/home/Hero';
import HeroBox from './components/home/HeroBox';
import HomeServices from './components/home/HomeServices';
import EmergencyContact from './components/home/EmergencyContact';
import PhotoGrid from './components/home/PhotoGrid';
import ServicesSummary from './components/home/ServicesSummary';
import Testimonials from './components/home/Testimonials';
import logo from '../assets/logos/icon_blackandwhite.jpg';

const Home = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Electrician",
        "name": "Powerful Projects",
        "description": "Your trusted local electrician in Melbourne, Geelong, and Torquay. We specialize in residential safety checks, commercial installations, EV charger installations. Contact us for a free quote!",
        "url": "https://www.powerfulprojects.com.au/",
        "telephone": "+61408425907",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Melbourne",
            "addressRegion": "VIC",
            "addressCountry": "AU"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "PublicHolidays",
              "opens": "00:00",
              "closes": "23:59"
            }
        ],
        "image": "https://www.powerfulprojects.com.au" + logo,
        "priceRange": "Contact for free quote",
        "serviceArea": [
            "Melbourne",
            "Geelong",
            "Torquay"
        ],
        "serves": "Residential Safety Checks, Commercial Installations, EV Charger Installation"
    };

    return (
        <div className="Home">
            <Helmet>
                <title>Powerful Projects | Electrician Melbourne, Geelong & Torquay</title>
                <meta name="description" content="Your trusted local electrician in Melbourne, Geelong, and Torquay. We specialize in residential safety checks, commercial installations, EV charger installations. Contact us for a free quote!" />
                <meta property="og:title" content="Powerful Projects | Electrician Melbourne, Geelong & Torquay" />
                <meta property="og:description" content="Your trusted local electrician in Melbourne, Geelong, and Torquay. We specialize in residential safety checks, commercial installations, EV charger installations. Contact us for a free quote!" />
                <meta property="og:image" content={"https://www.powerfulprojects.com.au" + logo} />
                <meta property="og:url" content="https://www.powerfulprojects.com.au/" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Powerful Projects | Electrician Melbourne, Geelong & Torquay" />
                <meta name="twitter:description" content="Your trusted local electrician in Melbourne, Geelong, and Torquay. We specialize in residential safety checks, commercial installations, EV charger installations. Contact us for a free quote!" />
                <meta name="twitter:image" content={"https://www.powerfulprojects.com.au" + logo} />
                <link rel="canonical" href="https://www.powerfulprojects.com.au/" />
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>
            <Hero />
            <HeroBox />
            <div className="hero-content">
                <HomeServices className="hero-services" />
                <EmergencyContact className="emergency-contact" />
            </div>
            <PhotoGrid />
            <ServicesSummary />
            <Testimonials className="testimonials" />
        </div>
    );
};

export default Home;