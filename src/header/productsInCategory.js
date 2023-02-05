import { useEffect, useState } from "react";
import Header from "./header";
import productApi from '../api/productsAPI';
import { useParams } from "react-router-dom";
import Card from "../components/card";
import AddToCart from "../components/addToCard";
import AddToFavorite from "../components/addToFavorite";

export default function ProductsInCategory(){
  const {cat} = useParams()
  const [products, setProducts] = useState([])
  useEffect(()=>{
    productApi.category(cat)
    .then(resp=> setProducts(resp.data.products))
    
  },[cat])

  return(
    <div>
      <Header/>
      <div className="d-flex gap-5  flex-wrap">
        {products.map(el=> 
          <div>
            <Card key={el.id} product={el}/>  
            <div className="btn-group">
              <AddToCart product={el}/>
              <AddToFavorite product={el}/>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}