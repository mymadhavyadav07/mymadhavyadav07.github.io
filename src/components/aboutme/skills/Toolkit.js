import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import vs from "../../../images/Vs.png";
import pc from "../../../images/pc.png";
import git from "../../../images/git.png";
import github from "../../../images/github.png";
import pg from "../../../images/pg.png";
import wsl from "../../../images/wsl.png";
import django from "../../../images/django.jpg";
import mysql from "../../../images/mysql.png";
import docker from "../../../images/docker.png";
import hf from "../../../images/hf.png";
import langchain from "../../../images/langchain.png";
import llama from "../../../images/llama.png";

import tensorflow from "../../../images/tf.png";
import opencv from "../../../images/opencv.png";

import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

export default function Toolkit() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skill
        </Link>
        <Link className="btn btn-primary " to="/toolkit">
          Toolkit
        </Link>
      </div>
      <Zoom left cascade>
        <h1 className="mt-4">Tools I Use</h1>
      </Zoom>
      <Container className="mt-4">
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <img src={vs} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={pc} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={tensorflow} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={docker} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={mysql} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={django} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={wsl} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={git} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img
              src={github}
              alt=""
              style={{
                width: "85%",
                height: "85%",
                filter: "grayscale(1) invert(1)",
              }}
            />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={opencv} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={pg} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <img src={hf} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <img src={langchain} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <img src={llama} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
