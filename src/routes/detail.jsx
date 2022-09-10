import React from "react";
import { useParams } from "react-router-dom";
const  Detail = (props) => {
    const { id } = useParams();
    const 찾는상품 = props.shoes.find(function (x) {
        return x.id == id;
    })
    console.log(props)
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={'https://codingapple1.github.io/shop/shoes' + props.shoes[id].id + '.jpg'} width="100%" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{props.shoes[id].title}</h4>
                        <p>{props.shoes[id].content}</p>
                        <p>{props.shoes[id].price}</p>
                        <button className="btn btn-danger">주문하기</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;