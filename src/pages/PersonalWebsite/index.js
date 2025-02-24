import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";


export const PersonalWebsite = () => {

  return (
    <Container className="About-header">
      <Row>
        <Col>
          <h1 className="display-4 mb-4">Personal Website - 2024</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>

      <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Overview</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <p>
              My personal portfolio website containing projects, coursework, and film photography skills using the React.js 
              portfolio template created by ubaimutl on Github. 
              <br /><br />
              <b class="highlight"><a href="https://github.com/lehosoda/lehosoda.github.io" class="highlight" target="_blank" rel="noopener noreferrer">Link to Github Code</a></b>
              <br />
              <b class="highlight"><a href="https://github.com/ubaimutl/react-portfolio" class="highlight" target="_blank" rel="noopener noreferrer">Link to Portfolio Template</a></b>
           </p>
          </Col>
        </Row>

      <Row className=" sec_sp">
        <Col lg="5">
          <h3 className="color_sec py-4">Project Retrospective</h3>
        </Col>
        <Col lg="7">
          <p>
            My first ever portfolio that I made in my sophomore year was made on Squarespace, which looking back now looks somewhat humorous in comparison to 
            the portfolio you're currently seeing right now. 
            After coding the Hui Hoaloha 'Ulana website, I figure that I would be a bit more experiemental with my personal portfolio. Since I'm not super confident
            in my React.js abilities, I decided to use a template but attempt to put my own 'twist'. Overall, the majority of the page layouts, spacing, and 
            animated features such as the mouse click were all left intact to maintain the clean aesthetic. Due to the academic rigor and my current 
            club involvements, I haven't had the time to work on some of my personal projects however I do intend to work on them post graduation, mainly focusing
            on app design with Kotlin or Swift.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
