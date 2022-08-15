import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <h3>Contacto:</h3>
        <div className="colz">
          <div className="colz-icon">
            <a href="https://api.whatsapp.com/send/?phone=541127682286&text&type=phone_number&app_absent=0">
              <WhatsAppIcon fontSize="large" />
            </a>
            <a href="mailto:leo.arrieta93@hotmail.com">
              <MarkunreadIcon fontSize="large" />
            </a>
          </div>
        </div>
        <p>
          Desarrollado por{" "}
          <p>
            <a href="https://github.com/Leon2192">@Leonardo Manuel Arrieta</a>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
