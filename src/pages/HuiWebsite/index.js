import React from "react";
import "./style.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { huiweb } from "../../content_option";

export const HuiWebsite = () => {
  return (
    <Container className="About-header">
      <Row>
        <Col>
          <h1 className="display-4 mb-4">Hui Hoaloha 'Ulana Website - 2024</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>

      <Row className="sec_sp">
        <Col lg="5">
          <h3 className="color_sec py-4">Overview</h3>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <p>
            A redesigned website for Hui Hoaloha 'Ulana (Hawai'i Club at UW) to improve visual appeal and increase user interaction.
            The previous design consisted of static HTML components and contained very minimal information about the RSO. The updated design
            features a <b className="highlight">React.js</b> framework and <b className="highlight">CSS</b> styling with interactive features,
            addressing information architecture issues. <br /> <br />
            <b class="highlight"><a href="https://students.washington.edu/ohanauw/#/" class="highlight" target="_blank" rel="noopener noreferrer">Website Link</a></b>
          </p>
        </Col>
      </Row>

      <Row className="sec_sp">
        <Col>
          <Carousel indicators={false}>
            {huiweb.map((image, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={image.src} alt={image.alt} />
                <div className="text-center mt-3">
                  <p>{image.caption}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      <Row className="sec_sp">
        <Col lg="5">
          <h3 className="color_sec py-4">Project Retrospecitive</h3>
        </Col>
        <Col lg="7">
          <p>
            Previous iterations of the website were created by my peers who had no experience with website development and coding. To this day I'm still impressed
            with what they accomplished and wanted to pay homage to them. I initially attempted to have a similar layout however it was difficult due to the fact
            that all the styling used one CSS file that had 3000+ lines of code, so I decided to start from scratch using React.js instead to incorporate interactive
            elements. In hindsight, I only took one previous class that used React.js and could have made my job easier by using a template found on GitHub. But 
            nonetheless I think that it was a good challenge and ended up being beneficial when coding my personal website.
          </p>
        </Col>
      </Row>

      <Row className="sec_sp">
        <Col lg="5">
          <h3 className="color_sec py-4">Next Steps</h3>
        </Col>
        <Col lg="7">
          <p>
            In 2025, I intend to add Lu'au page in preparation for the spring quarter which will include information about involvement,
            sponsorship, and ticket sales as well as an intramurals page for quarterly participation. Additionally, I'm in the process of implementing
            a mobile layout to further improve usability.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
