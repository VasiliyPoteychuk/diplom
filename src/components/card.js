import '../styles/rating.css';
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../store/favoriteSlice";
import AddToCart from "./addToCard";

export default function Card({product}){
  const dispatch =useDispatch();

  return(
    <div className="card  shadow mt-5">
      <div className="card-body d-flex flex-column aline-items-center" >
        <NavLink to={`/products/${product.id}`} className='d-flex justify-content-center'>
           <img src={product.thumbnail} className='card-img-top  '  alt='картинка'/>
        </NavLink>
        <div className="card-body d-flex gap-3">
          <h2 className="card-text">{product.price}$</h2>
          <h6 className="card-text text-danger bg-warning rounded-circle text-center d-flex align-items-center p-2">-{product.discountPercentage}%</h6>
          <h6 className="card-text text-decoration-line-through text-dark">{Math.round(product.price/(100-product.discountPercentage)*100)}$</h6>
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
