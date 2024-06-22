import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Newsletter.css';
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png"

const NewsLetter = () => {
  const navigate = useNavigate();

  const handleCheckUpdates = () => {
    navigate('/update'); // Replace '/updates' with the actual path you want to navigate to
  };

  return (
    <>
        <h1>NEWS-LETTER</h1>
        
        <div class="content">
            <div class="main-news">
                <h2>Main News</h2>
                <p>Disability kits are designed to assist individuals with disabilities in performing daily tasks and improving their quality of life. These kits typically include a variety of adaptive tools and devices tailored to the specific needs of the user. For example, a mobility kit might include a wheelchair, crutches, or a walker, while a communication kit could feature speech-generating devices and visual aids. The items in these kits are selected to address physical, sensory, or cognitive impairments, enabling greater independence and participation in daily activities. The effectiveness of a disability kit relies on a thorough assessment of the individual's needs and the careful selection of appropriate aids to enhance functionality and accessibility.</p>
            </div>
            <div class="side-news">
                <div class="news-item-1">
                  <div className='inside'>
                  <h3>Our Goals This Week</h3>
                  <p>Our primary goal this week is to enhance the quality of life for individuals with disabilities by focusing on accessibility, inclusion, and empowerment. We are implementing several key initiatives aimed at removing barriers and creating a more inclusive environment. This includes upgrading public facilities to ensure they are fully accessible, launching new training programs for caregivers and support staff, and advocating for policy changes that promote equal opportunities in education and employment.</p>
                  </div>
                  <img src={img1} alt="" className='img1'/>
                </div>
                <div class="news-item-2">
                    <img src={img2} alt="Strategy" className='img2'/>
                    <div className='inside'>
                    <h3>Our Strategy</h3>
                    <p>Our strategy is centered around fostering a more inclusive and accessible society for individuals with disabilities. We aim to achieve this by leveraging a multi-faceted approach that includes advocacy, education, and technology.By building strong partnerships with community organizations and stakeholders, we ensure that our efforts are both comprehensive and sustainable. Our ultimate goal is to create an environment where all individuals, regardless of their abilities, have the opportunity to thrive and achieve their full potential.</p>
                    </div>
                </div>
            </div>
        </div> 
    <div className='newsletter'>
      <button className='btn btn-success' onClick={handleCheckUpdates}>
        Check for Latest Updates
      </button>
      <h1>Get Exclusive Latest Updates On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type='email' placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
    </>
  );
};

export default NewsLetter;
