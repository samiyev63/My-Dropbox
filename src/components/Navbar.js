import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import { BiLogIn, BiCog } from 'react-icons/bi';
import {FaDropbox} from 'react-icons/fa'

export default function NavbarComponent() {
  return (
    <Navbar bg="primary" expand="sm" className="d-flex justify-content-between">
      <Navbar.Brand as={Link} to="/" className="text-danger">< FaDropbox fontSize="3rem"/>
        Dropbox
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user" className="text-danger ">
          < BiCog fontSize ='3rem'/>
        </Nav.Link>
        <Link to="/Login"  className="p-2 text-danger" >
          <BiLogIn  fontSize="3em"/>
        </Link>
      </Nav>
    </Navbar>
  )
}
