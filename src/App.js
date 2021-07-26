import React from 'react';
import { Route, Routes } from 'react-router';
import ConsoleProvider from './context/ConsoleProvider';

import TopBar from './components/TopBar/TopBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Console from './components/Console/Console';

import './App.css';

const App = () => {

  return (
    <ConsoleProvider>
      <header>
        <TopBar />
      </header>
      <main>
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
            <About />
          } />
        </Routes>
      </main>
      <Console />
    </ConsoleProvider>
  );
}

export default App;
