import CatalogProducts from "./catalog";
import SearchInput from "./search";
import { NavLink } from "react-router-dom";
import brandLogo from "../icons/mobileLogo.jpg"
import logoCart from "../icons/cart3.png"
import personLogo from "../icons/person.png"
import favoriteLogo from '../icons/favorite1.png'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { search, searchProduct } from "../store/searchSlice";

export default function Header(){
  const dispatch = useDispatch()

    function cleanSearch(){
      dispatch(searchProduct([]))
      dispatch(search(''))
    }

  return(
    <header className=" d-flex justify-content-around gap-5 align-items-center position-sticky  top-0  shadow" >
      <NavLink to={'/'} onClick={()=> cleanSearch()}><img src={brandLogo}  style={{width:150+'px'}} alt='brandLogo'/></NavLink>
      <CatalogProducts/>
      <SearchInput/>
      <NavLink to={"/favorite"}><img src={favoriteLogo} style={{width: 100 + "px"}} alt='favoriteLogo'/></NavLink>
      <NavLink to={"/authorithation"}><img src={personLogo} style={{width: 100 + "px"}} alt='authLogo'/></NavLink>
      <NavLink to={"/cart"}><img src={logoCart}  style={{width: 100 + "px"}} alt='cartLogo'/></NavLink>
    </header>
  )
}