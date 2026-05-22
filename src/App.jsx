import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col selection:bg-primary selection:text-primary-foreground">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Project />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
