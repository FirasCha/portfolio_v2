// import React from 'react'
// import './footer.css'
// import {FaFacebookF} from 'react-icons/fa'
// import {FiInstagram} from 'react-icons/fi'
// import {IoLogoTwitter} from 'react-icons/io'
// const Footer = () => {
//   return (
//     <footer>
//         <a href='#' className='footer__logo'>Firas</a>
//         <ul className='permalinks'>
//           <li><a href='#'>Home</a></li>
//           <li><a href='#about'>About</a></li>
//           <li><a href='#experience'>Experience</a></li>
//           <li><a href='#services'>Services</a></li>
//           <li><a href='#portfolio'>Portfolio</a></li>
//           <li><a href='#testimonials'>Testimonials</a></li>
//           <li><a href='#contact'>Contact</a></li>
//         </ul>
//         <div className='footer__socials'>
//           <a href='https://facebook.com'><FaFacebookF/></a>
//           <a href='https://instagram.com'><FiInstagram/></a>
//           <a href='https://twitter.com'><IoLogoTwitter/></a>
//         </div>
//         <div className='footer__copyright'>
//           <small>&copy; Firas Chaouch</small>
//         </div>
//     </footer>
//   )
// }

// export default Footer
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Firas Chaouch</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/Soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;