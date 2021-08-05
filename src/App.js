import React from 'react';
import { Route, Routes } from 'react-router';
import ConsoleProvider from './context/ConsoleProvider';
import { useLocation } from 'react-router';

import TopBar from './components/TopBar/TopBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import PortfolioCom from './components/Portfolio/Commercial/PortfolioCom';
import PortfolioPersonal from './components/Portfolio/Personal/PortfolioPersonal';
import Skills from './components/Skills/Skills';
import Contacts from './components/Contacts/Contacts';
import Console from './components/Console/Console';

import './App.css';

const App = () => {

  const currentLocation = useLocation();
  let mainClasses = currentLocation.pathname === "/about" || currentLocation.pathname==="/portfolio/personal" || currentLocation.pathname==="/portfolio/commercial" ? "mainScrollable" : "main";

  return (
    <ConsoleProvider>
      <header>
        <TopBar />
      </header>
      <main className={mainClasses}>
        <Routes>
          <Route path="/" element={
            <Home linkList={[
              { link: "About", path: "/about" },
              { link: "Portfolio", path: "/portfolio" },
              { link: "Skills", path: "/skills" },
              { link: "Contacts", path: "/contacts" },
            ]
            } />
          } />
          <Route path="/about" element={
            <About linkList={[
              { link: "Home", path: "/" },
              { link: "Portfolio", path: "/portfolio" },
              { link: "Skills", path: "/skills" },
              { link: "Contacts", path: "/contacts" },
            ]
            }
            />
          } />
          <Route path="/portfolio" element={
            <Portfolio linkList={[
              { link: "Home", path: "/" },
              { link: "Portfolio", path: "/portfolio" },
              { link: "Skills", path: "/skills" },
              { link: "Contacts", path: "/contacts" },
            ]
            } />
          }></Route>
          <Route path="/portfolio/commercial" element={<PortfolioCom />} />
          <Route path="/portfolio/personal" element={<PortfolioPersonal />} />
          <Route path="/skills" element={
            <Skills />
          } />
          <Route path="/contacts" element={
            <Contacts />
          } />
        </Routes>
      </main>
      <Console />
    </ConsoleProvider>
  );
}

export default App;
