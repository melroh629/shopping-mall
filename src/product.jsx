import React from "react";
const Product = (props) => {
    const img = props.i + 1
    return (
        <>
            <div className="col-md-4">
                <img src={'https://codingapple1.github.io/shop/shoes' + img + '.jpg'} />
                <h4>{props.shoe.title}</h4>
                <p>{props.shoe.price}</p>
            </div>
        </>
    )
}
export default Product;