import { Button, Col, Container, Row } from "react-bootstrap";
import "./Introduction.css";

export default function Introduction() {
  return (
    <div className="introduction p-3 p-lg-5 mt-5">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <h1 className="pl-2 text-center">
              Welcome to dynamic form{" "}
              <span className="pt-2 pb-4">
                that you will do everything that you want
              </span>
            </h1>
            <h4 className="text-center pt-3">
              Hi, I'm Joel Trinidad, im 25 years old and i like make programms
              and develop with js.
            </h4>
            <div className="d-flex container-actions mt-5">
              <div className="container-buttons">
                <Button className="p-3" onClick={() => console.log("click")}>
                  Git it touch
                </Button>
                <Button className="p-3">Git it touch</Button>
              </div>
              <div className="btn-start-create">
                <a href="#dynamic-form">
                  Start to create
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
