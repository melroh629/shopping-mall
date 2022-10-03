import {configureStore, createSlice} from '@reduxjs/toolkit'

//useState의 역할
let user = createSlice({
    name: "user",
    initialState: "kim",
    reducers: {
        changeName(state){
            return 'john kim'
        }
    }
})
let stock = createSlice({
    name: "stock",
    initialState: [10,11,12]
})
let cart = createSlice({
    name : "cart",
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1},
    ],
    reducers: {
        addStock(state, action){
            let found = state.findIndex((a)=>{return a.id === action.payload.id})
            if(found >= 0){
                state[found].count++;
            }else{
                let copy = {...action.payload, count : 1}
                state.push(copy)
            }
        }
    }
})
//export해서 해당 함수를 사용할수 있게 만들어줌
export let {changeName} = user.actions
export let {addStock} = cart.actions
export default configureStore({
    reducer: {
        // 작명 : user.reducer
        user: user.reducer,
        cart: cart.reducer,
    }
})
