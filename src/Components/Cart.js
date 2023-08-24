import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Cars from "./Cars";

const Cart = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        variant="light"
        onClick={() => setShow(!show)}
        className="me-2 position-relative"><i class="bi bi-cart-check"></i>
        <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger">
          3
          <span className="visually-hidden">Cart</span>
        </span>
      </Button>
      <Offcanvas show={show} onHide={() => setShow(!show)} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cars />
          <div className="text-end mt-3">
            <Button variant="primary">Check out</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
