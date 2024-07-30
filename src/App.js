import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import OurServices from './Pages/OurServices';
import Projects from './Pages/Projects';
import ContactUs from './Pages/ContactUs';
import ThankYou from './Pages/ThankYou';
import Header from './Pages/components/Header';
import Footer from './Pages/components/Footer';
import './stylesheets/App.css';

const App = () => {
  return (
    <Router basename="/powerfulProject24">
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/PowerfulProjects24/" element={<Home />} />
            <Route path="/PowerfulProjects24/our-services" element={<OurServices />} />
            <Route path="/PowerfulProjects24/projects" element={<Projects />} />
            <Route path="/PowerfulProjects24/contact-us" element={<ContactUs />} />
            <Route path="/PowerfulProjects24/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
