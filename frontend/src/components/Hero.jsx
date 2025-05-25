import React from "react";

// Hero component jo homepage ka main highlight section dikhata hai
const Hero = ({ title, imageUrl }) => {
  return (
    <>
      {/* Hero section ka main container */}
      <div className="hero container">

        {/* Left banner jisme heading aur description hai */}
        <div className="banner">

          {/* Hero Title */}
          <h1>{title}</h1>

          {/* Hospital ke baare mein description paragraph */}
          <p>
            ZeeCare Medical Institute is one of India's most trusted healthcare centers,
            offering advanced medical facilities with a human touch. Our dedicated team
            of experienced doctors and healthcare professionals ensures that every patient
            receives personalized care and attention. At ZeeCare, your health and
            well-being are our top priorities. We strive to create a safe, caring,
            <span style={{ fontWeight: "bold", color: "#007BFF" }}> healing environment</span> for you and your loved ones.
          </p>
        </div>

        {/* Right banner jisme image aur ek vector decoration hai */}
        <div className="banner">

          {/* Main hero image with animation effect */}
          <img src={imageUrl} alt="hero" className="animated-image" />

          {/* Decorative vector image niche ke layer ke liye */}
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>

      </div>
    </>
  );
};

export default Hero;
