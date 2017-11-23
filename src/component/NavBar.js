import React from 'react'
import Button from 'react-bootstrap/lib/Button';
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'

class NavBar extends React.Component {
    render() {
        return(
            <Navbar>

                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#"> ReCoTuTo </a>
                    </Navbar.Brand>
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Posts</NavItem>
                        <NavItem eventKey={1} href="#">Shouts</NavItem>
                        <NavItem eventKey={1} href="#">Comunidades</NavItem>
                        <NavItem eventKey={1} href="#">Juegos</NavItem>
                        <NavItem eventKey={1} href="#">Tops</NavItem>
                    </Nav>

                    <Nav pullRight>
                        <NavItem bsStyle="primary">Busqueda</NavItem>
                        <NavItem bsStyle="primary">Facebook</NavItem>                                        
                        <NavItem bsStyle="primary">Ingresar</NavItem>                        
                        <NavItem bsStyle="success">Registrate</NavItem>                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;


{/* <Navbar.Header>
<Navbar.Brand>
    <a href="#"> ReCoTuTo </a>
</Navbar.Brand>
</Navbar.Header>

<Nav.Collapse>
<Nav>
    <NavItem eventKey={1} href="#">Posts</NavItem>
    <NavItem eventKey={1} href="#">Shouts</NavItem>
    <NavItem eventKey={1} href="#">Comunidades</NavItem>
    <NavItem eventKey={1} href="#">Juegos</NavItem>
    <NavItem eventKey={1} href="#">Tops</NavItem>
</Nav>
<Nav>
    <Button bsStyle="primary">Busqueda</Button>
    <Button bsStyle="primary">Facebook</Button>
    <Button bsStyle="primary">Ingresar</Button>
    <Button bsStyle="success">Registrate</Button>
</Nav>
</Nav.Collapse>     */}