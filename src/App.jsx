import { useState } from 'react'
import './App.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
function App() {

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="px-10">hihi</div>
    </div>
  )
}

export default App
