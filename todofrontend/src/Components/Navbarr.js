import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { AuthContext } from '../security/AuthContext';
import { useAuth } from '../security/AuthContext';

function Navbarr() {

  // const authContext = useContext(AuthContext)
  // console.log("Navbar : " + authContext.number);

  const authContext = useAuth()
  const isAuthenticated = authContext.isAuthenticated

  function logout() {
    authContext.logout();
  }

  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={{color: "white"}}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
          {isAuthenticated && <Link className="nav-link" to="/welcome/nikita" style={{color: "violet"}}>Home</Link>}
          {!isAuthenticated && <Link className="nav-link" to="/login" style={{color: "yellow"}}>Login</Link>}
          {isAuthenticated && <Link className="nav-link" to="/todos" style={{color: "blue"}}>Todos</Link>}
          {isAuthenticated && <Link className="nav-link" to="/logout" onClick={logout} style={{color: "orange"}}>Logout</Link>}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbarr