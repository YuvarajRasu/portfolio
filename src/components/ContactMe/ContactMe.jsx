import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  const handleMailClick = () => {
    window.open(
      "https://mail.google.com/mail/u/0/#sent?compose=GTvVlcSKhbmHlkVqsFGLtMftZDZHcjlHtKMgXXQBdjmCzgQmDbpZpQMMnbrXpBHzmFThBbqFxcrXq",
      "_blank"
    );
  };
  const handleGithubClick = () => {
    window.open("https://github.com/YuvarajRasu", "_blank");
  };

  return (
    <section className="contact-container" id="contact">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            icon={<CiMail size={25} color="#ffffff" />}
            text={"vmrasuyogeshwaran222@gmail.com"}
            onClick={() => handleMailClick()}
          />
          <ContactInfoCard
            icon={<FaGithub size={25} color="#ffffff" />}
            text={"https://github.com/YuvarajRasu"}
            onClick={() => handleGithubClick()}
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
