import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          <img src="\airlink logo.png" alt="Logo" style={{ width: '350px', height: '100px' }}/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#home"><img src="/footer-home.png" alt="Icon" /></a>
              <a href="https://www.facebook.com/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright © All Rights Reserved | Adhith KL, Ann Geo, Alan Martin</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
