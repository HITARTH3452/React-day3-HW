import "./Body.css";
import img from "../assets/img/images.jpeg"

import React from 'react';

function Body() {
  return (
    <div className="body-container">
      <div className="image-container">
        <img src={img} alt="Family Wellness" />
      </div>
      <div className="content-container">
        <h2>Think Health, Think Massage</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed arcu at ante consequat ultricies. Proin mattis, ipsum vel pharetra feugiat, tortor mauris hendrerit nisi, eget aliquam libero turpis at lectus.</p>
        <button>LEARN MORE ABOUT US</button>
        <button>CONTACT US TODAY</button>
      </div>
    </div>
  );
}

export default Body;
