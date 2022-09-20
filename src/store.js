import {configureStore, createSlice} from '@reduxjs/toolkit'

//useState의 역할
let user = createSlice({
    name: "user",
    initialState: "kim",
    reducers: {
        changeName(){
            return 'john kim'
        }
    }

})

let stock = createSlice({
    name: "stock",
    initialState: [10,11,12]
})
let cart = createSlice({
    name: "cart",
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1},
    ]
})
//export해서 해당 함수를 사용할수 있게 만들어줌
export let {changeName} = user.actions
export default configureStore({
    reducer: {
        // 작명 : user.reducer
        user: user.reducer,
        cart: cart.reducer,
    }
})
