import { Container, Nav } from "react-bootstrap";

function Navbar() {
    return (
        <Container>

            <Nav
            >
                <Nav.Item>
                    <Nav.Link href="/">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/about">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/users">Link</Nav.Link>
                </Nav.Item>

            </Nav>


        </Container>
    );

};

export default Navbar;