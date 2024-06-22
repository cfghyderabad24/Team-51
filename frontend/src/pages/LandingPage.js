import React from 'react';
import LandingNavbar from '../components/LandingNavbar';
import './styles.css';

const LandingPage = () => {
    const playVideo = () => {
        window.open('https://www.youtube.com/embed/VCM1ohwhmmA?autoplay=1', '_blank');
      };
  return (
    <div>
    <div>
      <LandingNavbar />
      
      </div>
      <div className="container1">
      {/* Spacer */}
      <div className="spacer"></div>

      {/* Heading */}
      <h2 className="heading">Coding Toy</h2>

      {/* Inner Section */}
      <div className="inner-section">
        {/* First Column */}
        <div className="column">
          {/* Empty Column for spacing */}
        </div>

        {/* Second Column with Video Widget */}
        <div className="column">
          <div className="video-overlay" onClick={playVideo}>
            <img
              src="https://www.nextskills360.in/wp-content/uploads/2023/11/Youtube-icon.png"
              alt="Youtube Video"
            />
          </div>
        </div>

        {/* Third Column with Image Widgets */}
        <div className="column">
          {/* Image Widget 1 */}
          <img
            src="https://www.nextskills360.in/wp-content/uploads/2023/10/Stem-Kit-1.png"
            alt="Stem Kit"
          />
          {/* Image Widget 2 with Caption */}
          <figure>
            <img
              src="https://www.nextskills360.in/wp-content/uploads/elementor/thumbs/Android-pqouff6syhs0rfwqvuipurj3u8r9eev0atac6l66v0.png"
              alt="Android"
            />
            <figcaption className="caption">App Available on Android Phones Only!</figcaption>
          </figure>
        </div>
      </div>

      {/* Spacer */}
      <div className="spacer"></div>
    </div>
    </div>
    
  );
};

export default LandingPage;
