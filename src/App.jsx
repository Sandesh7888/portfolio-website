import React from 'react';
import './App.css';
import { Navbar, About, Contact, Footer,Footer2, HeroCompo, Project, Resume, Skills,Toggle ,Animation} from './Components';

const App = () => (
  <div className="mainBody">
    {/* <Toggle  /> */}
    {/* <Animation /> */}

    <div className="NavBarMainContainer">
      <div className="inner-container">
        <Navbar />
      </div>
    </div>

    <div className="outer-container">
      <div className="inner-container">
        <HeroCompo />
      </div>
    </div>

    <div className="outer-container">
      <div className="inner-container">
        <About />
        <Resume />
        <Skills />
        <Project />
        <Contact />
        <Footer />
        <Footer2/>
      </div>
    </div>
  </div>
);

export default App;

