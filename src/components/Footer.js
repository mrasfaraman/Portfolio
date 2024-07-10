import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <h1>AsTech.</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/asfar-aman-408484267/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/mrasfarmahay"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/mr.asfaraman?utm_source=qr&igsh=MXRhazBmaHQ2ZWJvbQ=="><img src={navIcon3} alt="Icon" /></a>
              
                           
                            
                            
            </div>
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
