import React from "react";

// Biography component jo "Who We Are" ka section dikhata hai
const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      
      {/* Left side banner jisme image hai */}
      <div className="banner">
        <img src={imageUrl} alt="Who We Are" className="bio-image" />
      </div>

      {/* Right side banner jisme content hai */}
      <div className="banner">
        
        {/* Section Tagline */}
        <p className="section-tagline">Biography</p>

        {/* Section Title */}
        <h3 className="section-title">Who We Are</h3>

        {/* Paragraphs about the company/organization */}
        <p className="section-description">
          ZeeCare Medical Institute stands for excellence and care. Founded with a vision to transform healthcare in India, 
          our mission is to deliver world-class medical services backed by compassion and innovation.
        </p>

        <p className="section-description">
          We are proud to be growing stronger in 2025, embracing new technologies and modern healthcare techniques.
        </p>

        <p className="section-highlight">
          Our team is actively working on revolutionary MERN Stack Projects to build smarter, faster, and patient-centric solutions.
        </p>

        <p className="section-description">
          We believe healthcare is not just about treatment — it's about building trust, nurturing hope, and creating a healthier tomorrow.
        </p>

        <p className="section-motto">
          "Coding is fun, but healing lives is our true passion!"
        </p>

      </div>
    </div>
  );
};

export default Biography;
