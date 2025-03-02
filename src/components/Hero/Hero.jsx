import React from "react";
import "./Hero.css";
import userImage from "../../assets/user1.jpeg";
import reactIcon from "../../assets/images/react-native.svg";
import htmlIcon from "../../assets/images/html.png";
import cssIcon from "../../assets/images/css.png";
import jsIcon from "../../assets/images/js.png";

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <div className="hero-content">
        <h2>Shaping the Future of Digital Experiences</h2>
        <p>
          Passionate about creating modern, user-focused solutions with a
          relentless dedication to growth and innovation. I bring creativity,
          precision, and an achieving mindset to every project, striving to
          build products that leave a lasting impression. Let’s build something
          extraordinary!
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src={htmlIcon} alt="reactlogo" />
          </div>
          <img src={userImage} alt="userlogo" style={{ borderRadius: 50 }} />
        </div>

        <div>
          <div className="tech-icon">
            <img src={cssIcon} alt="reactlogo" />
          </div>
          <div className="tech-icon">
            <img src={jsIcon} alt="reactlogo" />
          </div>
          <div className="tech-icon">
            <img src={reactIcon} alt="reactlogo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
