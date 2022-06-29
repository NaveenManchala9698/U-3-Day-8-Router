import { Component } from "react";
import netflix_logo from "../assets/netflix_logo.png"
import kids_icon from "../assets/kids_icon.png"
import {Navbar, NavDropdown, Nav, Form, FormControl, Button} from "react-bootstrap"
import {Link} from 'react-router-dom'


class MyNav extends Component {
    render() {
        return (

                <Navbar bg="dark" expand="lg">
                    <Navbar.Brand href="#"><img src={netflix_logo} alt={"netflix-logo"} height={"46"}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto ">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/tvshows" className="nav-link">TV Shows</Link>
                            <Nav.Link href="/MovieDetails/:movieID">Details</Nav.Link>
                            <Nav.Link href="#link">Recently Added</Nav.Link>
                            <Nav.Link href="#link">My List</Nav.Link>
                            
                        </Nav>
                        <Form inline>
                        <i className="bi bi-search nav-icons mx-3 align-middle text-white"></i>
                        <i className="bi bi-bell-fill nav-icons mx-2 align-middle text-white"></i>
                        <img src={kids_icon} alt="kids_icon" width="32" height="32" />
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                            <NavDropdown title="Naveen"  id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Back office</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Edit Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Account</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
                            </NavDropdown>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            
        )
    }
}

export default MyNav