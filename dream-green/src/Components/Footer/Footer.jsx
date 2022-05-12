import React from "react";
import Patricia from "../../Images/Patricia1.png";
import Alexandre from "../../Images/Alexandre1.png";
import Joao from "../../Images/Joao1.png";
import Lourenço from "../../Images/Lourenco1.png";
import Santiago from "../../Images/Santiago1.png";
import { AiOutlineMail, AiTwotonePhone } from "react-icons/ai";
import { RiMapPinFill } from "react-icons/ri";
import { FiMap } from "react-icons/fi";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="footerContainer">
      <div className="contact-container">
        <div className="contact-icon">
          <h3 className="icon-description">
            <icon className="icon-contact">
              <AiTwotonePhone />
            </icon>
            Contact
          </h3>
          <p>+351214443322</p>
        </div>
        <div className="contact-icon">
          <h3 className="icon-description">
            <icon className="icon-contact">
              <AiOutlineMail />
            </icon>
            Email
          </h3>
          <p>dream-green@wildcode.com</p>
        </div>
        <div className="contact-icon">
          <h3 className="icon-description">
            <icon className="icon-contact">
              <RiMapPinFill />
            </icon>
            Office
          </h3>
          <p>Rua Visconde Santarém, 73B, Lisbon</p>
        </div>
        <div className="contact-icon">
          <h3 className="icon-description">
            <icon className="icon-contact">
              <FiMap />
            </icon>
            Stockroom
          </h3>
          <p>Rua Conde Redondo, 84, Lisbon</p>
        </div>
      </div>
      <div className="social-container">
        <h3 className="social-title">The Team behind the Project</h3>
        <div className="QR-code_container">
          <img className="qr-code" src={Patricia} alt="Patricia QR code"></img>
          <img className="qr-code" src={Alexandre} alt="Patricia QR code"></img>
          <img className="qr-code" src={Joao} alt="Patricia QR code"></img>
          <img className="qr-code" src={Lourenço} alt="Patricia QR code"></img>
          <img className="qr-code" src={Santiago} alt="Patricia QR code"></img>
        </div>
      </div>
    </div>
  );
}

export default Footer;
