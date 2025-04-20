import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import axios from "axios";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Contactus() {
  const [formData, setFormData] = useState(new FormData());

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(formData.name && formData.email && formData.message)) {
      alert("Something went wrong!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/submitForm",
        formData
      );
      console.log(response.data.message); // Log the response from the backend

      alert(`Thanks ${formData.name}, I will shortly connect with you!`);
    } catch (error) {
      console.error("Error submitting the form:", error);

      alert("Backend Server was not Running while submitting the form.");
    }

    setFormData({});
  };

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Contact me</h1>
              </Zoom>
            </Col>
            <Col md={12} id="contact" className="mt-3">
              <Row>
                
                <Col md={7}>
                  <div className="contacts-details" style={{paddingLeft: "0rem"}} >
                    <a
                      href={`mailto:mymadhavyadav07@gmail.com`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiAtSign />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        mymadhavyadav07@gmail.com
                      </p>
                    </a>
                    <a
                      href="https://maps.app.goo.gl/GK55TDCmcvqb5z149"
                      className="personal-details"
                    >

                      <div className="personal-details">
                        <div className="detailsIcon">
                          <HiOutlineLocationMarker />
                        </div>
                        <p style={{ color: "#fbd9ad" }}>
                          Delhi, India.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="contact-map" style={{paddingLeft: "0rem"}}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.4440301854!2d76.8971360827116!3d28.527297851822723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1708622590903!5m2!1sen!2sin"
                      frameBorder="0"
                      allowFullScreen=""
                      aria-hidden="false"
                      title="Contact Me"
                      tabIndex="0"
                      loading="lazy"
                      className=""
                    ></iframe>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
