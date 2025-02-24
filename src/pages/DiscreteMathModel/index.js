import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";


export const DiscreteMathModel = () => {

  return (
    <Container className="About-header">
      <Row>
        <Col>
          <h1 className="display-4 mb-4">Discrete Mathematical Modeling - 2024</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>

      <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Overview</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <p>
              The objectives of our project are to determine the optimal way to fill a shipping container with 3 different types of cargo. 
              Current challenges faced by the shipping container company include giving precise and replicable instructions to their workers so that 
              they may fill their cargo container in a way that is both efficient and in line with cargo specifications (i.e fragile items,
              items that need to be oriented a specific way, and weight that is allowed to be above specific items). <br />
              The paper was in collaboration with four other peers during the course MATH 381: Discrete Mathematical Modeling (Spring 2023) under the direction
              of Professor Sara Billey. 
              <br /><br />
              <strong>Role:</strong> Mathematical Researcher, Content Designer
              <br />
              <strong>Tools:</strong> LaTeX, Autodesk Tinkercad
              <br /> <br />
              <b class="highlight"><a href="https://drive.google.com/file/d/13KgCX_tTLBtBcRkRvFDS8p4lNCCy9b5a/view?usp=sharing" class="highlight" target="_blank" rel="noopener noreferrer">Link to Paper</a></b>
           </p>
          </Col>
        </Row>

      <Row className=" sec_sp">
        <Col lg="5">
          <h3 className="color_sec py-4">Project Retrospective</h3>
        </Col>
        <Col lg="7">
          <p>
            This was my favorite math class that I've taken at UW since it had a real world application. My professor emphasized the importance of giving back to 
            our local communities, in this case it was a family business from one of my group members. The problem itself is nothing new, but the added constraints
            of fragility, filling percentage, and rotation constraints is what made it especially interesting. Additionally, I especially enjoyed making a trifold
            board to present to peers and industry professionals. Looking back, I would have liked to have refined the code a bit more and include another cad 
            visualization using a more robust software.
          </p>        
        </Col>
      </Row>
    </Container>
  );
};
