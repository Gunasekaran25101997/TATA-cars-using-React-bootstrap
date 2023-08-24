import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';


const Banner = () => {
  return (
    <Container fluid>
        <Row className="justify-content-center align-items-center">
            <Col lg={8}>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../asset/Nexon.jpeg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Nexon's Safety Shield</h3>
          <p className="d-none d-sm-block">one of the safest compact SUVs that you can buy</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../asset/tigor2.jpeg')}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Your Happiness</h3>
          <p className="d-none d-sm-block">Tata Nexon is the First Indian vehicle to score a perfect five stars</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../asset/20230222051507_Harrier.jpeg')}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Your Dream</h3>
          <p className="d-none d-sm-block">
          Can reach a top speed of 180 kmph
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Col>

        </Row>
        <div className="text-center">
        <h2 className="display-5 mt-3">We are looking for your safest life!</h2>
        <p className="lead text-muted">Top safest car</p>
      </div>
    </Container>
  )
}

export default Banner