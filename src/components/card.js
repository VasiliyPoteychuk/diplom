import Rating from "./rating";
import '../styles/rating.css';
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../store/favoriteSlice";
import AddToCart from "./addToCard";

export default function Card({product}){
  const dispatch =useDispatch()


  return(
    <div className="card  shadow mt-5">
      <div className="card-body">
        <NavLink to={`products/${product.id}`}>
           <img src={product.thumbnail} className='card-img-top  my-1' style={{height:300+'px', width:300 +'px'}} alt='картинка'/>
        </NavLink>
        <div className="card-body d-flex gap-3">
          <h5 className="card-text">{product.price}$</h5>
          <h6 className="card-text bg-dark-subtle text-danger">-{product.discountPercentage}%</h6>
          <h6 className="card-text text-decoration-line-through text-dark">{Math.round(product.price/(100-product.discountPercentage)*100)}$</h6>
        </div>
        
        <h4 className="card-text text-center">{product.title}</h4>
        {/* <Rating value={product.rating}/> */}
        <div className="btn-group">
          <AddToCart product={product}/>
          <button className="btn btn-warning" onClick={()=> dispatch(addFavorite(product))}>добавить в избраное</button>
        </div>
      </div>
      
        
    </div>
    
  )
}
