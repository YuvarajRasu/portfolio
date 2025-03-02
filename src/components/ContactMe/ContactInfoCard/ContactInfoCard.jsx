import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ icon, text, onClick }) => {
  return (
    <div className="contact-details-card">
      <div className="icon" onClick={onClick}>
        {icon}
      </div>

      <p>{text}</p>
    </div>
  );
};

export default ContactInfoCard;
