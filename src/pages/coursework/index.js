import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  meta,
  infocoursework,
  mathcoursework,
  csecoursework,
  dscoursework
} from "../../content_option";

export const Coursework = () => {
  return (
    <HelmetProvider>
      <Container className="About-header page-margin-bottom">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Coursework | {meta.title}</title>
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Coursework</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">Informatics</h3>
          </Col>
          <Col lg="8">
            <table className="table caption-top">
              <tbody>
                {infocoursework.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.title}</th>
                      <td>{data.course}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">Mathematics</h3>
          </Col>
          <Col lg="8">
            <table className="table caption-top">
              <tbody>
                {mathcoursework.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.title}</th>
                      <td>{data.course}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">Computer Science and Engineering</h3>
          </Col>
          <Col lg="8">
            <table className="table caption-top">
              <tbody>
                {csecoursework.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.title}</th>
                      <td>{data.course}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">Data Science and Statistics</h3>
          </Col>
          <Col lg="8">
            <table className="table caption-top">
              <tbody>
                {dscoursework.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.title}</th>
                      <td>{data.course}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
      
      </Container>
    </HelmetProvider>
  );
};
