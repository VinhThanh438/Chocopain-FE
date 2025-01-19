import MainHeader from "../components/Headers/Main.header";
import { Container, Row, Col } from 'react-bootstrap';
import SidebarLeft from '../components/Menu';
import SidebarRight from '../components/Suggest-side-bar';
import NewFeed from '../components/New-feed';

const Home = () => {
    return (
        <>
            <MainHeader/>
            <Container fluid>
                <Row>
                    <Col xs={2} className="sidebar-left">
                    <SidebarLeft />
                    </Col>
                    <Col xs={8} className="main-content">
                    <NewFeed />
                    </Col>
                    <Col xs={2} className="sidebar-right">
                    <SidebarRight />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;