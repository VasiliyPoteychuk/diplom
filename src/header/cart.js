import { useDispatch, useSelector } from "react-redux"
import { cartSelect } from "../store/cartSlice"
import Card from "../components/card"
import {NavLink} from "react-router-dom"
import brandLogo from "../icons/mobileLogo.jpg"
import { incrementCount, decrementCount, deleteProduct} from "../store/cartSlice"
import Header from "./header"

export default function Cart(){
  const cartList = useSelector(cartSelect);
  const dispatch = useDispatch();
  const i =0
  const summShoping = cartList.reduce((acc, el)=> acc + (el.price*el.count), i)
  const countShoping = cartList.reduce((acc, el)=> acc + el.count, i)

  return(
    <div>
      <Header/>
      <div className="d-flex justify-content-evenly">
        <h2>количество покупок: {countShoping}</h2>
        <h2>общая стоимость: {summShoping}$</h2>
      </div>
      <div className="d-flex gap-5 flex-wrap">
        {cartList.length >0 ?     
          cartList.map(el => 
            <div key={el.id} className="card">
              <Card product={el}/>
              <div className="d-flex justify-content-center gap-2">
                <button onClick={()=> dispatch(decrementCount(el))}>-</button>
                <span>{el.count}</span>
                <button onClick={()=> dispatch(incrementCount(el))}>+</button>
              </div>
              <button className="btn btn-success" onClick={()=> dispatch(deleteProduct(el))}>удалить</button>
            </div>  
          )
          :
          <div  className="auth-form d-flex flex-column  gap-3 ">
            <h1>Корзина пуста</h1>
            <h4>Чтобы найти необходимые товары, воспользуйтесь поиском или каталогом.</h4>
            <NavLink to={'/'} ><button className='btn btn-dark'>Перейти на главную</button></NavLink>
          </div>
          
        }
      </div>
      
    </div>
  )
}