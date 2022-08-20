import React from 'react'
import { Navbar,Container,Nav,NavDropdown,Form,Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark"   variant="dark" expand="lg">
          <Container >
            <Navbar.Brand href="#">TeachPro Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#Home">Home</Nav.Link>
                <Nav.Link href="#Products">products</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
                <Nav.Link href="#" >About</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header