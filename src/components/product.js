import { useEffect, useState } from "react";
import { NavLink, useParams} from "react-router-dom";
import productApi from '../api/productsAPI';
import AddToCart from "./addToCard";
import Header from "../header/header"
import AddToFavorite from "./addToFavorite";
import Rating from "./rating";
import { useDispatch } from "react-redux";
import { addFavorite } from "../store/favoriteSlice";
export default function Product(){
  const [product, setProduct] = useState({})
  const [images, setImages] = useState(product.images)
  const {id} = useParams()
  const dispatch = useDispatch()

  useEffect(()=> {
    productApi.getProduct(id)
    .then(resp => setProduct(resp.data))
  },[id])

  return(
    <div>
      <Header/>
      <div className="d-flex border">
        <div><img src={product.thumbnail}/></div>
        <div>
          <h1>{product.brand} {product.title}</h1>
          <h4></h4>
          <p>{product.description}</p>
          <p>Старая цена: {Math.round(product.price/(100-product.discountPercentage)*100)}$</p>
          <p>Скидка: {product.discountPercentage}%</p>
          <p>Цена: {product.price}$</p>
          <p>В наличии: {product.stock}</p>
          <Rating value={product.rating}/>
          <div className="btn-group">
            <AddToCart product={product}/>
            <button className="btn btn-warning" onClick={()=> dispatch(addFavorite(product))}>добавить в избраное</button>
          </div>
          
        </div> 
      </div> 
    </div>
  )
}