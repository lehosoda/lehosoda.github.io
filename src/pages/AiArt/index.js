import React from "react";
import "./style.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { aiart } from "../../content_option";

export const AiArt = () => {

  return (
    <Container className="About-header">
      <Row>
        <Col>
          <h1 className="display-4 mb-4">AI Art Study - 2024</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>

      <Row className="sec_sp">
        <Col lg="5">
          <h3 className="color_sec py-4">Overview</h3>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <p>
            The purpose of this study is to explore the perception humans have of visual art as it applies to both AI generated art and human created art. 
            Art has been collectively regarded as a medium for the expression of emotions, experiences, and social commentaries. Traditionally known as a
            distinctly human pursuit, the evolution of AI (specifically generative AI), equipped with the ability to create artwork almost indistinguishable 
            from human-created art, has brought about a significant shift to this model. <br />
            The project was in collaboration with two other peers through the Human Centered Design and Engineering Directed Reading Programming
            under the direction of Professor Alan Marks. 
            <br /><br />
            <strong>Role:</strong> Project Manager
            <br />
            <strong>Tools:</strong> Bing Image Generator
            <br /> <br />
            <b class="highlight"><a href="https://amarks.github.io/aiacademia/" class="highlight" target="_blank" rel="noopener noreferrer">Link to Class Website</a></b>
          </p>
        </Col>
      </Row>

      <Row className="sec_sp">
        <Col>
          <Carousel indicators={false}>
            {aiart.map((image, index) => (
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

      <Row className=" sec_sp">
        <Col lg="5">
          <h3 className="color_sec py-4">Project Retrospective</h3>
        </Col>
        <Col lg="7">
          <p>
            My original proposal for the project was inspired by the Turing Test, but rather than testing a participant's ability to distinguish human
            from computer communication, I wanted to use images drawn by a person in comparison to AI based on a given prompt.
            Due to the time constraints, this project was a bit ambitious in the span of a 6 week period so we decided to create all images using Bing Image 
            Creator. I would have liked to interview larger demographic, specifically college level students that have at least some prior experience with AI 
            image generation and somehow link it back to the original goal of the directed reading program, AI in Academia. The results are quite biased due to 
            small pool and diversity of research participants, difficulties with distinguishing qualitative elements that make an image appear/seem AI generated, 
            and variabilities in having three people conducting interviews in various times/loations. Despite these shortcomings, I still find great pride in 
            the fact that I, along with my team were able to carry out a research project from start to finish.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
