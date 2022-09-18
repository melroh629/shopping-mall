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
import axios from "axios";
import Cart from "./routes/cart.jsx";


function App() {

  const [shoes, setShoe] = useState(data)
  const [count, setCount] = useState(2)
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
          <Route path="/cart" element={<Cart />}/>

          {/* detail/아무거나 라는 뜻 */}
          <Route path="/event" element={<Event />} >
            <Route path="one" element={<One />} />
            <Route path="two" element={<Two />} />
          </Route>
          <Route path="*" element={<h2>없는 페이지입니다</h2>} />
        </Routes>
        <p style={{display:"none"}}>
          1. 버튼 2회 누르면  7,8,9 번째 상품도 가져오기<br/>
          2. 버튼 3회 누르면 상품 더 없다고 알려주기<br/>
          3. 버튼 누르면 '로딩중입니다' 글자 띄우기<br/>
        </p>
        <button onClick={()=>{
          const url = `https://codingapple1.github.io/shop/data${count}.json`;
          console.log(url)
          axios.get(url)

              .then((result)=>{
                const copyShoes = [...shoes, ...result.data];
                setShoe(copyShoes)
              })
              .catch(()=>{
                alert('server error')
              })
          setCount(count+1);
          console.log(count);
        }}>더보기</button>

      </>
    </div>
  )
}

export default App
