import { Container, Row } from "react-bootstrap";
import Owners from "./Owners";

const Brands = () => {
  // const [menu] = useState([1]);
  return (
    <section id="categories" className="bg-light">
      <Container>
        <div className="text-center">
          <h3 className="text-primary my-3 py-5">
            Happy to give you a pleasant ride <i class="bi bi-car-front"></i>
            </h3>
        </div>
        <Row>
          {/* {menu.map((item) => {
            return (
              <Col md={6} lg={4} key={item}>
                <Owners />
              </Col>
            );
            })} */}
            <Owners />
        </Row>
      </Container>
    </section>
  );
};

export default Brands;
