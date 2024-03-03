// WhatsAppIcon.js
import React from "react";
import whatsappIcon from "../assets/images.jpg"; // Path to your WhatsApp icon image

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/03362005886" 
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fixed"
    >
      <img src={whatsappIcon} alt="WhatsApp" width={60} height={60} />
    </a>
  );
};

export default WhatsAppIcon;
