import React from 'react';
import LandingNavbar from '../components/LandingNavbar';
import './LandingPage.css';
import './AwardsSection.css'

const awardsData = [
    {
      imgSrc: "https://www.nextskills360.in/wp-content/uploads/2022/04/MIT-Solve-WebSiteF-1.jpg",
      imgAlt: "MIT Solve",
      heading: "Selected as an MIT Solver Team",
    },
    {
      imgSrc: "https://www.nextskills360.in/wp-content/uploads/2022/01/Dell-300x228.jpg",
      imgAlt: "Dell",
      heading: "Winner of ElevatED challenge",
    },
    {
      imgSrc: "https://www.nextskills360.in/wp-content/uploads/2021/10/McGovern-Foundation.jpg",
      imgAlt: "McGovern Foundation",
      heading: "The AI for Humanity Prize by McGovern Foundation",
    },
    {
      imgSrc: "https://www.nextskills360.in/wp-content/uploads/2022/01/Vodafone-300x228.jpg",
      imgAlt: "Vodafone",
      heading: "Innovation for Women Prize by Vodafone Americas Foundation",
    },
    {
      imgSrc: "https://www.nextskills360.in/wp-content/uploads/2022/03/GSR-Awards.jpg",
      imgAlt: "GSR",
      heading: "The GSR Prize by GSR",
    },
    {
      imgSrc: "https://www.nextskills360.in/wp-content/uploads/2021/10/HYSEA.jpg",
      imgAlt: "HYSEA",
      heading: "Hottest TEN STARTUPS and Best Software Product by HYSEA",
    },
    {
      imgSrc: "https://www.nextskills360.in/wp-content/uploads/2021/10/Action-for-India.jpg",
      imgAlt: "Action for India",
      heading: "Best Indian Social Enterprise by AFI",
    },
  ];
const LandingPage = () => {
    const playVideo = () => {
        window.open('https://www.youtube.com/embed/VCM1ohwhmmA?autoplay=1', '_blank');
      };
  return (
    <div>
    
      <LandingNavbar />
      
     
      <div className="container1">
      {/* Spacer */}
      <div className="spacer"></div>

      {/* Heading */}
      <h2 className="heading">Coding Toy</h2>

      {/* Inner Section */}
      <div className="inner-section">
        {/* First Column */}

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
    <div style={{ 
      
      
      
      textAlign: 'center' 
    }}>
      <h2>Awards Won</h2>
    </div>
    <section className="awards-section">
      <div className="awards-container">
        {awardsData.map((award, index) => (
          <div key={index} className="award-card">
            <div className="award-image">
              <img src={award.imgSrc} alt={award.imgAlt} />
            </div>
            <div className="award-heading">
              <h2>{award.heading}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
    
  );
};

export default LandingPage;
