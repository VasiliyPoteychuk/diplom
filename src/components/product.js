import { useEffect, useState } from "react";
import { useParams, NavLink} from "react-router-dom";
import productApi from '../api/productsAPI';
import AddToCart from "./addToCard";
import Header from "../header/header";
import Rating from "./rating";
import { useDispatch } from "react-redux";
import { addFavorite } from "../store/favoriteSlice";

export default function Product(){
  const [product, setProduct] = useState({});
  const [picture, setPicture] = useState([]);
  const [pic, setPic] = useState('');
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(()=> {
    productApi.getProduct(id)
    .then(resp => {
      setProduct(resp.data)
      setPicture(resp.data.images)
      setPic(resp.data.thumbnail)
    })
    
  },[id]);

  return(
    <div>
      <Header/>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column align-items-center  m-5 p-3 rounded shadow">
          <div>
            <img src={pic} alt='pictures' style={{width: 500 + 'px', height: 500 + 'px'}}/>
            <div>
              {picture.map(im=> 
                  <img key={im.id} src={im}  style={{width:100 + "px"}} onClick={()=>setPic(im)} alt='productImg'/>
              )}
            </div>
          </div>
          <div>
            <h1>{product.brand} {product.title}</h1>
            <p>{product.description}</p>
            <p>Старая цена: {Math.round(product.price/(100-product.discountPercentage)*100)}$</p>
            <p>Скидка: {product.discountPercentage}%</p>
            <p>Цена: {product.price}$</p>
            <p>В наличии: {product.stock}</p>
            <p>Рейтинг: <Rating value={product.rating}/></p>
            
            <div className="btn-group gap-1">
              <AddToCart product={product}/>
              <button className="btn btn-outline-warning rounded" onClick={()=> dispatch(addFavorite(product))}>добавить в избраное</button>
              <NavLink to={'/'}><button className='btn btn-outline-secondary'>на главную</button></NavLink>
            </div>
            
          </div> 
        </div> 
      </div>
    </div>
  )
};