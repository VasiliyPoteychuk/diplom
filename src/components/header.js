import CatalogProducts from "../helpers/catalog";
import SearchInput from "../helpers/search";
import { NavLink } from "react-router-dom";
import brandLogo from "../icons/mobileLogo.jpg";
import userLogo from '../icons/user.png';
import logoCart from "../icons/cart3.png";
import logInlogo from "../icons/login.png";
import logOutlogo from '../icons/logout.png';
import favoriteLogo from '../icons/favorite1.png';
import { useDispatch, useSelector } from "react-redux";
import { search, searchProduct } from "../store/searchSlice";
import { logOutUser, userSelect } from "../store/usersSlice";
import { cartSelect } from "../store/cartSlice"; 
import {useState} from 'react';
import { favoriteSelect } from "../store/favoriteSlice";

export default function Header(){
  const dispatch = useDispatch();
  const user = useSelector(userSelect) ;
  const [userOut, setUserOut] = useState(false);
  const cartCount = useSelector(cartSelect).length
  const favCount = useSelector(favoriteSelect).length
  function cleanSearch(){
    dispatch(searchProduct([]));
    dispatch(search(''));
  };
  function cleanUser(){
    dispatch(logOutUser());
    setUserOut(false);
  };

  return(
    <header className=" d-flex justify-content-around gap-5 align-items-center position-sticky  top-0  shadow" >
      <NavLink to={'/'} onClick={()=> cleanSearch()}><img src={brandLogo}  style={{width:150+'px'}} alt='brandLogo'/></NavLink>
      <CatalogProducts/>
      <SearchInput/>
      <div className="d-flex">
         <NavLink to={"/favorite"}><img src={favoriteLogo} style={{width: 100 + "px"}} alt='favoriteLogo'/></NavLink>
        {favCount!=0 && <span className=" p-2  bg-secondary text-white rounded-circle d-flex justify-content-center align-items-center w-25 h-25">{favCount}</span>}
      </div>
      {user.firstName? 
        <div className="position-relative">
          <img src={userLogo} style={{width: 100 + "px", height: 70 +'px'}} alt='authLogo' onClick={()=> setUserOut(!userOut)}/>
          <h4 className="text-center m-0">{user.firstName}</h4>
          {userOut && <img src={logOutlogo} onClick={()=> cleanUser()} className='position-absolute start-50' style={{width: 50 + 'px'}} alt='outLogo'/>}
        </div>
        :
        <NavLink to={"/authorithation"}><img src={logInlogo} style={{width: 100 + "px"}} alt='authLogo'/></NavLink>
      }
      
      <div className="d-flex">
        <NavLink to={"/cart"}><img src={logoCart}  style={{width: 100 + "px"}} alt='cartLogo'/> </NavLink>
        {cartCount!=0 && <span className=" p-2 bg-secondary text-white rounded-circle d-flex justify-content-center align-items-center w-25 h-25">{cartCount}</span>}
      </div>
      
    </header>
  )
};