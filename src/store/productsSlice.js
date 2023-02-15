import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import productsApi from '../api/productsAPI';

const initialState = {
  items: [],
  status: null,
  catalog: false,
  
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await productsApi.getProducts()
    return response.data  
  }
)

export const productsSlice = createSlice({
  name:'products',
  initialState,
  reducers: {
    changeCatalog: (state, action) => {
      state.catalog = action.payload
    }

  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state)=> {
      state.status = 'loading'
    });
   builder.addCase(fetchProducts.fulfilled, (state, action) => {
    state.items = action.payload.products;
    state.status = "loaded"
   });
  },
})

export const productsSelect = (state) => state.products.items;
export const catActiveSelect = (state) => state.products.catalog;
export const statusSelect = (state) => state.products.status;
export const {changeCatalog} = productsSlice.actions;
export default productsSlice.reducer