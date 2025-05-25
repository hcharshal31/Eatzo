import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers:{
        addItem: (state, action)=>{
            //  Here we are directly mutating over the state. i.e. initialState
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const index = action.payload;
            state.items.splice(index, 1);
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});


export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;