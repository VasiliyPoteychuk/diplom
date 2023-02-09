import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteFavorite, favoriteSelect } from "../store/favoriteSlice";
import Rating from "./rating";
import AddToCart from "./addToCard";
import Header from "../header/header";
import { useState } from "react";

export default function Favorite(){
  const favoriteList = useSelector(favoriteSelect)
  const dispatch = useDispatch()
  const [image, setImage] = useState('')

  return(
    <div>
      <Header/>
      <div className="d-flex flex-wrap">
        {favoriteList.length>0 ?
          favoriteList.map(el => 
            <div key={el.id} className=" d-flex m-5 gap-3 border rounded shadow p-2 w-25">
              <img src={el.thumbnail} className='card-img-top w-50  my-1' style={{height:250+'px',}} alt='картинка'/>
              <div className="d-flex flex-column gap-2">
                <h1>{el.title}</h1>
                <p>{el.description}</p>
                <h2>{el.price}$</h2>
                <Rating value={el.rating}/>
                <div className="btn-group">
                  <AddToCart product={el}/>
                  <button className="btn btn-danger" onClick={()=> dispatch(deleteFavorite(el.id))}>удалить</button>
                </div>
              </div>
            </div>  
          )
          :
          <div className="auth-form d-flex flex-column  gap-3">
            <h1>Вы ничего не добавили в избраное</h1>
            <NavLink to={'/'} ><button className='btn btn-dark'>Перейти на главную</button></NavLink>
          </div>
        }
      </div>
    </div>
  )
}