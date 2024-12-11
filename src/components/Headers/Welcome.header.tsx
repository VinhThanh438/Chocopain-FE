import { Container, Navbar, Button, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';

const WelcomeHeader = () => {
    return (
        <Router>
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

            {/* Define Routes for Login and Signup */}
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
}

export default WelcomeHeader;