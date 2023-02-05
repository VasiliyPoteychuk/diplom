import CatalogProducts from "./catalog";
import SearchInput from "./search";
import { NavLink } from "react-router-dom";
import brandLogo from "../icons/mobileLogo.jpg"
import logoCart from "../icons/cart3.png"
import personLogo from "../icons/person.png"
import favoriteLogo from '../icons/favorite1.png'

export default function Header(){

  return(
    <header className="d-flex justify-content-around align-items-center position-sticky  top-0" >
      <NavLink to={'/'} ><img src={brandLogo} className='bg-success' style={{width:150+'px'}}/></NavLink>
      <CatalogProducts/>
      <SearchInput/>
      
      <NavLink to={"/favorite"}><img src={favoriteLogo} style={{width: 100 + "px"}}/></NavLink>
      <NavLink to={"/authorithation"}><img src={personLogo} style={{width: 100 + "px"}}/></NavLink>
      <NavLink to={"/cart"}><img src={logoCart}  style={{width: 100 + "px"}}/></NavLink>
    </header>
  )
}