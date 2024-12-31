import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { yamagata, kyoto, tokyo } from "../../content_option";

export const PhotographyJapan = () => {

  return (
    <Container className="About-header">
      <Row>
        <Col>
          <h1 className="display-4 mb-4">Japan - December 2023</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      
      <Row>
      <h2 className="city mb-4">Yamagata - 山形</h2>
        {yamagata.map((data, i) => (
          <Col md={6} key={i}>
            <div className="japan_item">
              <img src={data.img} alt="" />
              <div className="content">
                <p>{data.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <Row>  
      <h2 className="city mb-4">Kyoto - 京都</h2>
        {kyoto.map((data, i) => (
          <Col md={6} key={i}>
            <div className="japan_item">
              <img src={data.img} alt="" />
              <div className="content">
                <p>{data.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <Row>  
      <h2 className="city mb-4">Tokyo - 東京</h2>
        {tokyo.map((data, i) => (
          <Col md={6} key={i}>
            <div className="japan_item">
              <img src={data.img} alt="" />
              <div className="content">
                <p>{data.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      
    </Container>
  );
};
