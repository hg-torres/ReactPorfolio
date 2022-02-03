import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap'

const Navigation = ({navClick}) => {

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">React Porfolio</Navbar.Brand>
        <Navbar.Collapse hidden={true}>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href='' onClick= {navClick}>About Me</Nav.Link>
            <Nav.Link href='' onClick={navClick} >Projects</Nav.Link>
            <Nav.Link href='' onClick={navClick} >Contact Me</Nav.Link>
            <Nav.Link href='' onClick={navClick} >Resume</Nav.Link>
          </Nav>
          </Navbar.Collapse>    
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas 
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          //className="bg-dark"
        >
          <Offcanvas.Header closeButton >
            <Offcanvas.Title id="offcanvasNavbarLabel">Porfolio</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body >
              <Nav className="justify-content-end flex-grow-1 pe-3" >
                <Nav.Link href="#action1">About Me</Nav.Link>
                <Nav.Link href="#action2">Projects</Nav.Link>
                <Nav.Link href="#action3">Contact Me</Nav.Link>
                <Nav.Link href="#action4">Resume</Nav.Link>
              </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default Navigation