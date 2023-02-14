import { useDispatch, useSelector } from "react-redux";
import { cartSelect } from "../store/cartSlice";
import {Navigate, NavLink} from "react-router-dom";
import { incrementCount, decrementCount, deleteProduct, deleteAllProduct} from "../store/cartSlice";
import Header from "./header";
import { addFavorite } from "../store/favoriteSlice";
import { userSelect } from "../store/usersSlice";
import { useState } from "react";
import BackButton from "../components/backButton";

export default function Cart(){
  const cartList = useSelector(cartSelect);
  const userAuth = useSelector(userSelect)
  const dispatch = useDispatch();
  const i = 0;
  const summShoping = cartList.reduce((acc, el)=> acc + (el.price*el.count), i);
  const countShoping = cartList.reduce((acc, el)=> acc + el.count, i);
  const [order, setOrder] = useState(false)

  function checkOut(){
    dispatch(deleteAllProduct())
    Navigate('/')
  }

  return(
    <div className="d-flex flex-column gap-4 ">
      <Header/>
      <div className="d-flex justify-content-evenly shadow bg-light ">
        <h2>количество покупок: {countShoping}</h2>
        <h2>общая стоимость: {summShoping}$</h2>
        {userAuth.firstName ?
        <button  className="btn btn-outline-success rounded" onClick={()=>setOrder(!order)}>Оформить заказ</button>:
        <NavLink to={'/authorithation'}><button  className="btn btn-outline-success rounded">Авторизируйтесь</button> </NavLink>
        }
      </div>
      {cartList.length >0 && <BackButton/>}
      {order? 
        <div className="auth-form">
          <h1>Ваш заказ оформлен</h1>
          <NavLink to={'/'}><button className="btn btn-outline-secondary" onClick={()=> checkOut()}>вернуться на главную</button></NavLink>
        </div>
      :
      <div className="d-flex gap-5 flex-wrap p-5 m-auto">
        {cartList.length >0 ?     
          cartList.map(el => 
            <div key={el.id} className="cartList"  >
              <img src={el.thumbnail} className='card-img-top  my-1' style={{height:200+'px', width:280 +'px'}} alt='картинка'/>
              <div className=""> 
                <div className=" d-flex gap-3">
                  <h2 className="card-text">{el.price}$</h2>
                  <h6 className="card-text text-danger bg-warning rounded-circle text-center d-flex align-items-center p-2">-{el.discountPercentage}%</h6>
                  <h6 className="card-text text-decoration-line-through text-dark">{Math.round(el.price/(100-el.discountPercentage)*100)}$</h6> 
                </div>
                <h4 className="card-text text-center">{el.title}</h4>
                <p>{el.description}</p>
                <div className="d-flex justify-content-center gap-2 m-2">
                  <button onClick={()=> dispatch(decrementCount(el))} className="btn btn-outline-dark rounded-circle" >-</button>
                  <h3>{el.count}</h3>
                  <button onClick={()=> dispatch(incrementCount(el))} className="btn btn-outline-dark rounded-circle">+</button>
                </div>
                <div className="btn-group d-flex flex-column gap-1">
                   <button className="btn btn-outline-warning rounded" onClick={()=> dispatch(addFavorite(el))}>добавить в избраное</button>
                  <button className="btn btn-outline-success rounded" onClick={()=> dispatch(deleteProduct(el))}>удалить</button>
                </div>
               
              </div>
            </div>
            ):
            <div  className="auth-form d-flex flex-column  gap-3 ">
              <h1>Корзина пуста</h1>
              <h4>Чтобы найти необходимые товары, воспользуйтесь поиском или каталогом.</h4>
              <NavLink to={'/'} ><button className='btn btn-dark'>Перейти на главную</button></NavLink>
            </div> 
        }
      </div>
      }
       
    </div>
  )
};