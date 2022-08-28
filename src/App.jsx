import { useState } from 'react'
import './App.css'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
// import Home from './home';
import Product from './product';
import Detail from './routes/detail';
import Event from './routes/event';
import One from './routes/one';
import Two from './routes/two';

function App() {

  const [shoes, shoeState] = useState(data)

  return (
    <div className="App">
      <>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
            <Nav className="me-auto">
              {/* useNavigate 사용하여 이동 */}
              {/* <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
              <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link> */}
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
          <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

          {/* detail/아무거나 라는 뜻 */}
          {/* path="*" route 설정된 경로 외에 모든 페이지 */}
          {/* <Route path="*" element={<h2>없는 페이지입니다</h2>} /> */}
          <Route path="/event" element={<Event />} >
            <Route path="one" element={<One />} />
            <Route path="two" element={<Two />} />
          </Route>
        </Routes>
      </>
    </div>
  )
}

export default App
