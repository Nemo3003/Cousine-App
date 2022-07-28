import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavbarUse =()=> {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Cousine App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/music">Music</Nav.Link>
            <Nav.Link href="/recipe">Recipes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )}