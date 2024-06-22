import React from 'react';
import './Training.css';

const Training = () => {
  const videos = [
    {
      title: "ProGame Product Demo",
      url: "https://www.youtube.com/embed/ZeS9yXJa13Q",
      link: "https://www.youtube.com/watch?v=ZeS9yXJa13Q"
    },
    {
      title: "ProGame Product Toy",
      url: "https://www.youtube.com/embed/VCM1ohwhmmA",
      link: "https://www.youtube.com/watch?v=VCM1ohwhmmA"
    },
    {
      title: "ProGame Product DIY",
      url: "https://www.youtube.com/embed/mBngh5aRaMs",
      link: "https://www.youtube.com/watch?v=mBngh5aRaMs"
    },
    // Add more video data as needed
  ];

  return (
    <div className="training-container">
      <h1>Training Page</h1>
      <div className="card-container">
        {videos.map((video, index) => (
          <div key={index} className="card">
            <a href={video.link} target="_blank" rel="noopener noreferrer">
              <h3>{video.title}</h3>
            </a>
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="200"
                src={video.url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Training;
