import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { andong, busan, gyeongju, sokcho, seoul } from "../../content_option";

export const PhotographyKorea = () => {

  return (
    <Container className="About-header">
      <Row>
        <Col>
          <h1 className="display-4 mb-4">South Korea - August/September 2023</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      
      <Row>
      <h2 className="city mb-4">Andong - 안동</h2>
        {andong.map((data, i) => (
          <Col md={6} key={i}>
            <div className="korea_item">
              <img src={data.img} alt="" />
              <div className="content">
                <p>{data.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <Row>  
      <h2 className="city mb-4">Busan - 부산</h2>
        {busan.map((data, i) => (
          <Col md={6} key={i}>
            <div className="korea_item">
              <img src={data.img} alt="" />
              <div className="content">
                <p>{data.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <Row>  
      <h2 className="city mb-4">Gyeongju - 경주</h2>
        {gyeongju.map((data, i) => (
          <Col md={6} key={i}>
            <div className="korea_item">
              <img src={data.img} alt="" />
              <div className="content">
                <p>{data.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <Row>  
      <h2 className="city mb-4">Sokcho - 속초</h2>
        {sokcho.map((data, i) => (
          <Col md={6} key={i}>
            <div className="korea_item">
              <img src={data.img} alt="" />
              <div className="content">
                <p>{data.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <Row>  
      <h2 className="city mb-4">Seoul - 서울</h2>
        {seoul.map((data, i) => (
          <Col md={6} key={i}>
            <div className="korea_item">
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
