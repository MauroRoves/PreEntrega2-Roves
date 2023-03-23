import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css";
import CartWidget from '../CartWidget';

import {NavLink} from "react-router-dom"


function NavBar() {
    return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
              <NavLink to={"/"}>Inicio</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Contacto</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item>
                  <NavLink to={"/category/dinosaurio"}>Dinosaurios</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                  <NavLink to={"/category/animal"}>Animales</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Conjuntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <CartWidget/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

             
          );
    }


    









export default NavBar;



