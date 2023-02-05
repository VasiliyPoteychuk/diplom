import {createSlice,} from '@reduxjs/toolkit';


const initialState = {
  cartItems: [],
  
  
}



export const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      
      if(state.cartItems.some(el => el.id===action.payload.id)){
        alert('Уже добавлено')
      }else{
        state.cartItems= [...state.cartItems, action.payload]
      }
    },
    incrementCount: (state,action) => {
      state.cartItems.map(item => {
        if(item.id===action.payload.id){
          item.count++
        }
      })  
    },
    decrementCount: (state, action) => {
      state.cartItems.map(item => {
        if(item.id===action.payload.id && item.count !==0){
          item.count--
        }
      })
      const items = state.cartItems.filter(el=>el.count!==0)
      state.cartItems = items
      
    },
    deleteProduct: (state, action) => {
      state.cartItems.map(item => {
        if(item.id===action.payload.id && item.count !==0){
          item.count=0
        }
      })
      const items = state.cartItems.filter(el=>el.count!==0)
      state.cartItems = items
    },
  }
})

export const cartSelect = (state) => state.cart.cartItems;
export default cartSlice.reducer;
export const {addProduct, incrementCount, decrementCount, deleteProduct} = cartSlice.actions;