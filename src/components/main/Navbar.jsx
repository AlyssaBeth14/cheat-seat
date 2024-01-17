import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap" 
import { Link } from "react-router-dom"

const NavigationBar = () => {
  return (
    <Navbar expand='md' bg='info' data-bs-theme='light' className="navbaredit">
        <Container fluid>
            <Navbar.Brand href='#home' className='editnav'><img src="public\Cheat_Seat-removebg-preview.png" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='me-auto'>
                    <Link to='/' className='nav-link'>Design</Link>
                    <Link to='/class_list' className="nav-link">Class List</Link>
                <NavDropdown title="Group" id="basic-nav-dropdown">
                    <Link to='/history_group' className="nav-link">History</Link>
                    <Link to='/english_group' className="nav-link">English</Link>
                    <Link to='/math_group' className="nav-link">Math</Link>
                    <Link to='/science_group' className="nav-link">Science</Link>
                </NavDropdown>
                <NavDropdown title="Ungroup">
                    <Link to='/ungroup1' className="nav-link">Ungroup 1</Link>
                    <Link to='/ungroup2' className="nav-link">Ungroup 2</Link>
                    <Link to='/ungroup3' className="nav-link">Ungroup 3</Link>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavigationBar