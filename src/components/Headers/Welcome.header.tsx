import { Container, Navbar, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WelcomeHeader = () => {
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/">CHOCOPAIN</Navbar.Brand>
                    <Row>
                        <Col xs="auto">
                            <Link to="/login">
                                <Button variant="light">Login</Button>
                            </Link>
                        </Col>
                        <Col xs="auto">
                            <Link to="/signup">
                                <Button variant="secondary">Signup</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </>
    );
}

export default WelcomeHeader;