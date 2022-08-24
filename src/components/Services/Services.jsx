import { Col, Container, Row } from "react-bootstrap";
import "./Services.css";
import imageCourse1 from "../../assets/img/hbo.jpeg";
import imageCourse2 from "../../assets/img/netflix.jpeg";
import imageCourse3 from "../../assets/img/prime.jpeg";
import CardService from "./CardService/CardService";

export default function Services() {
  const servicesArray = [
    {
      title: "HBO Max",
      subtitle: "HBO stream service",
      image: imageCourse1,
      footer: "Go to the service",
      link: "https://www.hbomax.com/mx/es"
    },
    {
      title: "Netflix",
      subtitle: "Netflix stream service",
      image: imageCourse2,
      footer: "Go to the service",
      link: "https://www.netflix.com/mx/"
    },
    {
      title: "Prime Video",
      subtitle: "Amazon stream service",
      image: imageCourse3,
      footer: "Go to the service",
      link: "https://www.primevideo.com"
    },
  ];

  return (
    <div className="services p-4 mt-5">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <h2 className="text-center">Services</h2>
            <h4 className="pb-3 text-center">Check some stream services</h4>
            <Row xs={12} md={3} className="g-4 mt-4">
                {servicesArray.map((service, index) => (
                    <CardService service={service} key={index}/>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
