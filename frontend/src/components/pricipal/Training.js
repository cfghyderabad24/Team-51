import React from 'react';
import './Training.css';

const Training = () => {
  const videos = [
    {
      title: "Training Video 1",
      url:  "https://www.youtube.com/embed/ZeS9yXJa13Q"
    },
    {
      title: "Training Video 2", 
      url: "https://www.youtube.com/embed/VCM1ohwhmmA"
    },
    {
      title: "Training Video 3",
      url: "https://www.youtube.com/embed/mBngh5aRaMs"
    },
    // Add more video data as needed 
  ];

  return (
    <div className="training-container">
      <h1>Training Page</h1>
      <div className="card-container">
        {videos.map((video, index) => (
          <div key={index} className="card">
            <h3>{video.title}</h3>
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
