import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import productsApi from '../api/productsAPI';

const initialState = {
  items: [],
  status: null,
  
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
export const statusSelect = (state) => state.products.status;
export default productsSlice.reducer