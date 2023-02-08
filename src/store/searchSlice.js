import {createSlice,} from '@reduxjs/toolkit';


const initialState = {
  searchItems: [],
  searchData: '',
  
}



export const searchSlice = createSlice({
  name:'search',
  initialState,
  reducers: {
    searchProduct: (state, action) => {
      state.searchItems=action.payload
      
    },
    search: (state,action) => {
        state.searchData=action.payload
    },
    
  }
})

export const searchItemsSelect = (state) => state.search.searchItems;
export const searchDataSelect = (state) => state.search.searchData;
export default searchSlice.reducer;
export const {searchProduct, search} = searchSlice.actions;