import { useEffect, useState } from "react";
import Header from "./header";
import productApi from '../api/productsAPI';
import { useParams } from "react-router-dom";
import Card from "../components/card";

export default function ProductsInCategory(){
  const {cat} = useParams();
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    productApi.category(cat)
    .then(resp=> setProducts(resp.data.products))
    
  },[cat]);

  return(
    <div>
      <Header/>
      <div className="d-flex gap-5  flex-wrap">
        {products.map(el=><Card key={el.id} product={el}/> 
        )}
      </div>
    </div>
  )
};