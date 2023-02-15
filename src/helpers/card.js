import '../styles/rating.css';
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../store/favoriteSlice";
import AddToCart from "./addToCard";

export default function Card({product}){
  const dispatch =useDispatch();

  return(
    <div className="card  shadow mt-5">
      <div className="card-body d-flex flex-column justify-content-around aline-items-center" >
        <NavLink to={`/products/${product.id}`} className='d-flex justify-content-center'>
           <img src={product.thumbnail} className='card-img-top  '  alt='картинка'/>
        </NavLink>
        <div className=" d-flex justify-content-evenly gap-3">
          <h2 className="card-text d-flex align-items-end">{product.price}$</h2>
          <p className="card-text text-danger bg-warning rounded-circle  d-flex justify-content-center align-items-center p-2">-{product.discountPercentage}%</p>
          <p className="card-text text-decoration-line-through text-dark">{Math.round(product.price/(100-product.discountPercentage)*100)}$</p>
          <span>&#x2605; {product.rating}</span>
        </div>
       
        <h4 className="card-text text-center">{product.title}</h4>
        <div className="btn-group gap-1">
          <AddToCart product={product}/>
          <button className="btn btn-outline-warning rounded" onClick={()=> dispatch(addFavorite(product))}>добавить в избраное</button>
          
        </div>
      </div> 
    </div>
  )
};
