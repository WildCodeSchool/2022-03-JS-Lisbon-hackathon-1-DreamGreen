import React from "react";
import { AiOutlineMail, AiTwotonePhone } from "react-icons/ai";
import { RiMapPinFill } from "react-icons/ri";
import { FiMap } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";
import Patricia from "../../Images/Patricia.jpeg";
import Joao from "../../Images/Joao.jpeg";
import Santiago from "../../Images/Santiago.jpeg";
import Alexandre from "../../Images/Alexandre.jpeg";
import Lourenco from "../../Images/Lourenco.jpeg";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footer-contact-container">
        <div className="contact-container">
          <div className="contact-card1">
            <div className="contact-icon">
              <h3 className="icon-description">
                <icon className="icon-contact">
                  <AiTwotonePhone />
                </icon>
                Contact
              </h3>
              <p className="contacts">+351214443322</p>
            </div>
            <div className="contact-icon1">
              <h3 className="icon-description">
                <icon className="icon-contact">
                  <AiOutlineMail />
                </icon>
                Email
              </h3>
              <p className="contacts">dream-green@wildcode.com</p>
            </div>
          </div>

          <div className="contact-card2">
            <div className="contact-icon">
              <h3 className="icon-description">
                <icon className="icon-contact">
                  <RiMapPinFill />
                </icon>
                Office
              </h3>
              <p className="contacts">Rua Visconde Santarém, 73B, Lisbon</p>
            </div>
            <div className="contact-icon">
              <h3 className="icon-description">
                <icon className="icon-contact">
                  <FiMap />
                </icon>
                Warehouse
              </h3>
              <p className="contacts">Rua Conde Redondo, 84, Lisbon</p>
            </div>
          </div>
        </div>
        <div className="social-container">
          <h3 className="social-title">The Team behind the Dream Green</h3>

          <div className="profile_container">
            <div className="profile-card">
              <a href="https://www.linkedin.com/in/patricia-saraiva-dm/">
                <img className="team-img" src={Patricia} alt="Patricia"></img>
              </a>
              <icon className="Linkedin-code">
                <SiLinkedin />
              </icon>
            </div>
            <div className="profile-card">
              <a href="https://www.linkedin.com/in/jo%C3%A3o-sassetti-5bab05184/">
                <img className="team-img" src={Joao} alt="Joao"></img>
              </a>
              <icon className="Linkedin-code">
                <SiLinkedin />
              </icon>
            </div>
            <div className="profile-card">
              <a href="https://www.linkedin.com/in/alexandresilvacosta/">
                <img className="team-img" src={Alexandre} alt="Alexandre"></img>
              </a>
              <icon className="Linkedin-code">
                <SiLinkedin />
              </icon>
            </div>

            <div className="profile-card">
              <a href="https://www.linkedin.com/in/santiago-l-b7ba00227/">
                <img className="team-img" src={Santiago} alt="Santiago"></img>
              </a>
              <icon className="Linkedin-code">
                <SiLinkedin />
              </icon>
            </div>

            <div className="profile-card">
              <a href="https://www.linkedin.com/in/louren%C3%A7o-morej%C3%B3n-06948811a/">
                <img className="team-img" src={Lourenco} alt="Lourenco"></img>
              </a>
              <icon className="Linkedin-code">
                <SiLinkedin />
              </icon>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
