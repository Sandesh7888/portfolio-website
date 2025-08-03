import { photo } from '../assets';
import './HeroCompo.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">

      <div className="hero-content">
        <div className="hero-header">

          <h1 className="hero-title">Hello <br />
          <span className="highlight" id="iam">I'am </span>
          <span className="highlight">Sandesh</span> </h1>
          <h2 className="subheading"> Full Stack Developer. </h2>

         </div>
        
      </div>

        
      <div className="hero-image-container">
        <img src={photo} alt="Portrait of Sandesh Karad" className="hero-image" />
      </div>

      <div className="hero-mobile-only">
        {/* Optional mobile content */}
      </div>
    </section>
  );
};

export default Hero;
