import {createSlice,} from '@reduxjs/toolkit';


const initialState = {
  favoriteItems: [],
  
  
}



export const favoriteSlice = createSlice({
  name:'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      
      if(state.favoriteItems.some(el => el.id===action.payload.id)){
        alert('Уже добавлено')
      }else{
        state.favoriteItems= [...state.favoriteItems, action.payload]
        
      }
      
    },
    deleteFavorite: (state, action)=> {
      const Items = state.favoriteItems.filter(el => el.id !== action.payload)
      state.favoriteItems = Items
    }
      
  },
  
})

export const favoriteSelect = (state) => state.favorite.favoriteItems;
export default favoriteSlice.reducer;
export const {addFavorite, deleteFavorite} = favoriteSlice.actions;