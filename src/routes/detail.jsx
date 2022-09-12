import React, {useEffect, useState} from "react";
import styled   from "styled-components";
import { useParams } from "react-router-dom";
const  Detail = (props) => {
    const { id } = useParams();
    const 찾는상품 = props.shoes.find(function (x) {
        return x.id == id;
    })

    const [alert, setAlert] = useState(true);
    useEffect(() => {
        const timer = setTimeout(()=>{
            setAlert(false);
        }, 2000);

    })

    const Button = styled.button`
      border-radius: 5px;
      padding: 10px;
      background-color: ${props => props.bg};
      color: ${props => props.bg === '#7171e2' ? 'black' : 'white'};
      margin-top: 10px;
      margin-right: 10px;
    `
    return (
        <>
            <div className="container">
                {
                    alert === true && (
                        <div style={{padding: "20px", fontSize:"20px", backgroundColor: "lightblue"}}>alert</div>
                    )
                }
                <div className="row">
                    <div className="col-md-6">
                        <img src={'https://codingapple1.github.io/shop/shoes' + props.shoes[id].id + '.jpg'} width="100%" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{props.shoes[id].title}</h4>
                        <p>{props.shoes[id].content}</p>
                        <p>{props.shoes[id].price}</p>
                        <Button bg="#7171e2">장바구니</Button>
                        <Button bg="#ee0d41">주문하기</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;