import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const Content = () => {
  const [show, setShow] = useState(false);
  return (
    <section id="testride" className="my-3">
      <div className="text-center my-2 py-3">
        <h2 className="display-5 text-primary">
          <i className="bi bi-search-heart"></i> Pick your favourite!
        </h2>
      </div>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={7}>
            <Image
              src={require("../asset/download.jpeg")}
              fluid={true}
              alt="Tata"
              rounded
            ></Image>
          </Col>
          <Col md={5}>
            <div className="p-3">
              <h2 className="h1">TATA Tiago</h2>
              <p className="lead text-muted">You can get a free Test Ride</p>
              <Button variant="primary" onClick={()=>setShow(true)}>
                <i className="bi bi-basket"></i> Buy Now
              </Button>
            </div>
          </Col>
        </Row>
        <ToastContainer
          className="position-fixed bottom-0 end-0 p-3"
          position="bottom-end"
        >
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added!</strong>
              <small>0 seconds ago</small>
            </Toast.Header>
            <Toast.Body>Your test ride is your ready.</Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>
    </section>
  );
};

export default Content;
