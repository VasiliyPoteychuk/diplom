import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteFavorite, favoriteSelect } from "../store/favoriteSlice";
import Card from "./card";
import AddToCart from "./addToCard";
import Header from "../header/header";

export default function Favorite(){
  const favoriteList = useSelector(favoriteSelect)
  const dispatch = useDispatch()
  return(
    
    <div>
      <Header/>
      {favoriteList.length>0 ?
        favoriteList.map(el => 
          <div key={el.id} className="card">
            <Card product={el}/>
            <div className="btn-group">
                <AddToCart product={el}/>
                <button className="btn btn-danger" onClick={()=> dispatch(deleteFavorite(el.id))}>удалить</button>
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
  )
}