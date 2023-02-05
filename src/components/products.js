import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, productsSelect, statusSelect } from "../store/productsSlice"
import Card from "./card"
import { NavLink } from "react-router-dom"
import AddToCart from "./addToCard"
import Header from "../header/header"
import { addFavorite } from "../store/favoriteSlice"

export default function Products(){
  const products = useSelector(productsSelect);
  const status = useSelector(statusSelect);
  const dispatch = useDispatch();
  const cat=[];
  products.map(prod => cat.push(prod.category));
  const categories=Array.from(new Set(cat));
  

  useEffect(()=> {
    dispatch(fetchProducts())
  },[dispatch])

  
   
  

  return(
    <div className="root position-relative">
      {status === 'loading' && <h1 className="  auth-form" role='alert'>Загрузка</h1>}
      <Header/>
      <div className=" m-5  d-flex flex-wrap gap-5">
        {products.map(el=>
          <div key={el.id} className="card m-3">
            <NavLink to={`products/${el.id}`}  >
              <Card  product={el}/>
            </NavLink>
            <div className="btn-group">
              <AddToCart product={el}/>
              <button className="btn btn-warning" onClick={()=> dispatch(addFavorite(el))}>добавить в избраное</button>
            </div>
          </div>
        )}
      </div>
      
    </div>
    
  )
}