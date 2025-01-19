import { Button, ButtonGroup, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { BiUserCircle, BiSolidBell } from "react-icons/bi";

const MainHeader = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" className="justify-content-between">
                <Navbar.Brand href="#home">
                    <img 
                        src="https://i.pinimg.com/736x/86/94/64/869464eb56e946e940c25f637c1bc3de.jpg"
                        width="46"
                        height="46"
                        className="d-inline-block align-top"
                        alt="Logo"
                        style={{ marginLeft: "50px" }}
                    />
                </Navbar.Brand>
                
                <Form className="mx-auto flex justify-content-between" style={{ width: "500px" }}>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                        style={{ marginRight: "10px" }}
                    />
                    <Button variant="outline-success" style={{ paddingRight: "20px" }}>Search</Button>
                </Form>

                <Nav style={{ marginRight: "30px" }}>
                    <Nav.Link href="#notifications" style={{marginRight: "20px"}}>
                        <BiSolidBell size={30} />
                    </Nav.Link>
                    <DropdownButton as={ButtonGroup} id="user-dropdown" variant="success" title={<BiUserCircle size={30} />}>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>Active Item</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                    
                </Nav>
            </Navbar>
        </>
    );
}

export default MainHeader;