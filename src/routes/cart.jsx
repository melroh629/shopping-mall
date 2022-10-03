import React, { useState} from "react";
import styled   from "styled-components";
import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {addStock, changeName} from "../store.js";


const  Cart = (props) => {
    //store안에 있던 모든 sate를 가져오는 것
    let cartState = useSelector((state)=>{
        return state
    });
    //dispatch : store한테 요청을 보내주는 함수
    let dispatch = useDispatch();

    return (
        <>
            <p>{cartState.user}의 장바구니</p>
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
                        cartState.cart.map((a, i) =>
                            <tr key={i}>
                                <td>{cartState.cart[i].id}</td>
                                <td>{cartState.cart[i].name}</td>
                                <td>{cartState.cart[i].count}</td>
                                <td>
                                    <button onClick={()=>{
                                        dispatch(addStock())
                                    }}>+</button>
                                </td>
                            </tr>)
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Cart;