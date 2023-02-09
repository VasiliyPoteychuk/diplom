import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { productsSelect } from "../store/productsSlice";
import categoryLogo from "../icons/category.png"

export default function CatalogProducts(){
  const products = useSelector(productsSelect);
  const [active, setActive] = useState(false)
  
  const cat=[];
  products.map(prod => cat.push(prod.category));
  const categories=Array.from(new Set(cat));
  
  
  return(
    <div className="dropdown">
      <img src={categoryLogo} onClick={()=> setActive(!active)} style={{width:100+'px'}}/>
      {active && <ul className="catalogList bg-dark rounded p-3">
        {categories.map(el=>
          <li key={el.id} onClick={()=>setActive(!active)} className=" "> <NavLink to={`/products/category/${el}`} key={el.id} cat={el} className="fs-3 text-light">{el}</NavLink></li>  
        )}
      </ul>}
    </div>
   
  )
}