import React from "react";
import { Button, Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const Owners = () => {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            About us
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>About us</h4>
          <p>
            We focus on engineering and tech-enabled automotive solutions to
            bring the future of mobility closer. The company is pioneering
            India's Electric Vehicle transition and enjoys considerable
            advantage in one of the fastest growing automotive markets in the
            world
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <>
      <Card className="m-3 p-3" style={{ width: '21rem' }}>
        <Card.Img variant="top" src={require("../asset/New folder/images.jpeg")} />
        <Card.Body>
          <Card.Title>Tigor</Card.Title>
          <Card.Text>
          value for money in any aspect
          </Card.Text>
          <div className="text-center">
            <Button
              variant="primary"
              onClick={() => setModalShow(true)}
            ></Button>
          </div>
        </Card.Body>
      </Card>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Card className="m-3 p-3"  style={{ width: '21rem' }} >
        <Card.Img variant="top" src={require("../asset/New folder/nexon3.jpeg")}/>
        <Card.Body>
          <Card.Title>Nexon</Card.Title>
          <Card.Text>
          Nexon is good quality product
          </Card.Text>
          <div className="text-center">
            <Button
              variant="primary"
              onClick={() => setModalShow(true)}
            ></Button>
          </div>
        </Card.Body>
      </Card>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Card className="m-3 p-3"  style={{ width: '21rem' }}>
        <Card.Img variant="top" src={require("../asset/New folder/harrier.jpeg")} />
        <Card.Body>
          <Card.Title>Harrier</Card.Title>
          <Card.Text>
          It is the first car from the company to be built on a Land Rover platform
          </Card.Text>
          <div className="text-center">
            <Button
              variant="primary"
              onClick={() => setModalShow(true)}
            ></Button>
          </div>
        </Card.Body>
      </Card>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
    
  );
};

export default Owners;
