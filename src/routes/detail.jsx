import React, {useEffect, useState} from "react";
import styled   from "styled-components";
import { useParams } from "react-router-dom";
const  Detail = (props) => {
    const { id } = useParams();
    const 찾는상품 = props.shoes.find(function (x) {
        return x.id == id;
    })

    const [banner, setBanner] = useState(true);
    const [numbers, setNumbers] = useState('');
    useEffect(() => {
        const timer = setTimeout(()=>{
            setBanner(false);
        }, 2000);
        if(isNaN(numbers) === true){
            alert('숫자만 입력해주세요');
        }

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
                    banner === true && (
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
                    <input placeholder="only numbers" style={{padding: "20px", width: "50%", margin: "0 auto", backgroundColor: "#f9f9f9"}}
                       onChange={(e)=>{
                           setNumbers(e.target.value);
                       }}/>
                    <p>numbers only</p>
                </div>
            </div>
        </>
    )
}

export default Detail;