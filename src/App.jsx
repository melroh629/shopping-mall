import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
// import Home from './home';
import Product from './product';
import Detail from './detail';

function App() {

  const [shoes, shoeState] = useState(data)

  return (
    <div className="App">
      <>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Link to="/">홈</Link>
        <Link to="/detail">상세</Link>
        <Routes>
          {/* Route는 만들 페이지 */}
          <Route path="/" element={<>
            <div className="main-bg"></div>
            <div className="container">
              <div className="row">
                {
                  shoes.map((shoe, i) => {
                    return (
                      < Product shoe={shoes[i]} i={i} key="shoes[i].id" />
                    )
                  })
                }
              </div>
            </div>
          </>} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </>
    </div>
  )
}

export default App
