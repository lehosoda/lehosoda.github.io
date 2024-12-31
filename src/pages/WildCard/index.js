import React from "react";
import "./style.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { wildcard } from "../../content_option";

export const WildCard = () => {
  return (
    <Container className="About-header">
      <Row>
        <Col>
          <h1 className="display-4 mb-4">Wild Card - 2022</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      
      <Row className="sec_sp">
          <Col lg="5">
              <h3 className="color_sec py-4">Overview</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
              <p>
                  An interactive game that promotes adaptability, collaboration, pattern recognition, fine motor skills, and creativity in children ages 4-7.
                  We aimed to develop a game that would take a child’s focus away from a digital screen to the real world within a post-pandemic environment.
                  The project was in collaboration with seven RSO members over the course of one academic quarter (Spring 2022).
                  <br /><br />
                  <strong>Role:</strong> UX researcher/designer
                  <br />
                  <strong>Tools:</strong> Figma, Laser Cutting
              </p>
          </Col>
      </Row>

      <Row className="sec_sp">
        <Col>
          <Carousel indicators={false}>
            {wildcard.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image.src}
                  alt={image.alt} // Use the alt attribute
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>


      <Row className=" sec_sp">
        <Col lg="5">
          <h3 className="color_sec py-4">Ideation</h3>
        </Col>
        <Col lg="7">
          <p>Using the ‘crazy 8s’ brainstorming technique, we came up with potential projects to pursue. Given that we are making this object for 
            children living in the 21st century, we wanted our toy to be innovative from a technological standpoint without taking away the imagination 
            associated with analog toys. Additionally, we created a moldboard of the toys we each enjoyed as children and considered what aspects could 
            be beneficial in our own toy. Afterward, we combined aspects from different ideation sketches to develop our final product. </p>
        </Col>
      </Row>

      <Row className=" sec_sp">
        <Col lg="5">
          <h3 className="color_sec py-4">Prototyping</h3>
        </Col>
        <Col lg="7">
          <p>
            The cards were digitally drawn and given specific and unique attributes to be listed below the images. They were then printed using on-campus 
            resources and the associated textures were cut and glued on top. For the outer case, we used cardboard, plexiglass, and a laser cutter. 
            We were not able to implement the technological component and it was purely for visualization purposes. 
          </p>
        </Col>
      </Row>

      <Row className=" sec_sp">
        <Col lg="5">
          <h3 className="color_sec py-4">Final Presentation</h3>
        </Col>
        <Col lg="7">
          <p>
            Using the ‘crazy 8s’ brainstorming technique, we came up with potential projects to pursue. Given that we are making this object for 
            children living in the 21st century, we wanted our toy to be innovative from a technological standpoint without taking away the imagination 
            associated with analog toys. Additionally, we created a moldboard of the toys we each enjoyed as children and considered what aspects could 
            be beneficial in our own toy. Afterward, we combined aspects from different ideation sketches to develop our final product. 
          </p>
        </Col>
      </Row>

      <Row className=" sec_sp">
        <Col lg="5">
          <h3 className="color_sec py-4">Project Retrospective</h3>
        </Col>
        <Col lg="7">
          <p>
            When I took this project on in my freshman year of college, it was with the intention of exploring design as a potential career choice, specifically
            in UX design. Prior to starting this project, I was unfamiliar with the concept of design altogether. With the help of my peers, I learned about 
            interaction, industrial, and visual communication design. Through taking design classes and participating in design related clubs, I found that 
            design was not a passion that I want to pursue. Despite not wanting a career in design, I still value this experience immensely.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
