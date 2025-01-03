import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col} from "react-bootstrap";
import { contactConfig } from "../../content_option";

export const ContactUs = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              <strong>LinkedIn: </strong>{" "}
              <a href={contactConfig.LINKEDIN} target="_blank" rel="noopener noreferrer">
                {contactConfig.LINKEDIN}
              </a>
            </address>
            <p>{contactConfig.description}</p>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
