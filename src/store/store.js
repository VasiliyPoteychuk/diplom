import {configureStore} from '@reduxjs/toolkit';
import productsReduser from './productsSlice'
import cartReduser from './cartSlice'
import favoriteReduser from './favoriteSlice'
import searchReduser from './searchSlice'

export const store = configureStore({
  reducer: {
    products: productsReduser,
    cart: cartReduser,
    favorite: favoriteReduser,
    search: searchReduser,
  }
})

