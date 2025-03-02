import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-content">
      <form>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="Firstname" />
          <input type="text" name="lastname" placeholder="Last  name" />
        </div>
        
        <input type="text" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message" rows={3} />

        <button>SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
