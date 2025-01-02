import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainHeader = () => {
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/">CHOCOPAIN</Navbar.Brand>
                    <Row>
                        <Col xs="auto">
                            <Link to="/login">
                                <Button variant="light">HOME</Button>
                            </Link>
                        </Col>
                        <Col xs="auto">
                            <Link to="/signup">
                                <Button variant="secondary">HOME</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </>
    );
}

export default MainHeader;