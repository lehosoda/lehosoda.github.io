import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { photography, meta } from "../../content_option";

export const Photography = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Photography {meta.title} </title>{" "}
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Photography </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            {photography.filter((_, i) => i % 2 === 0).map((data, i) => {
              return (
                <div key={i} className="po_item">
                  <img src={data.img} alt="" />
                  <div className="content">
                    <p>{data.description}</p>
                    <a href={data.link}>view gallery</a>
                  </div>
                </div>
              );
            })}
          </Col>
          <Col md={6}>
            {photography.filter((_, i) => i % 2 === 1).map((data, i) => {
              return (
                <div key={i} className="po_item">
                  <img src={data.img} alt="" />
                  <div className="content">
                    <p>{data.description}</p>
                    <a href={data.link}>view gallery</a>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
