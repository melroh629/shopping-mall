import React, { useState} from "react";
import styled   from "styled-components";
import {Table} from "react-bootstrap";
import {useSelector} from "react-redux";


const  Cart = (props) => {
    //store안에 있던 모든 sate를 가져오는 것
    //state.user로 하면 user state만 가져옴
    const cartState = useSelector((state)=>{
        return state
    })

    return (
        <>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
                </thead>
                <tbody>
                    {
                        cartState.cart.map((a, i)=>
                            <tr key={i}>
                                <td>{cartState.cart[i].id}</td>
                                <td>{cartState.cart[i].name}</td>
                                <td>{cartState.cart[i].count}</td>
                                <td>안녕</td>
                            </tr>)
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Cart;