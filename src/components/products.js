import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, productsSelect, statusSelect } from "../store/productsSlice"
import Card from "../helpers/card"
import Header from "./header"
import { searchDataSelect, searchItemsSelect, searchProduct } from "../store/searchSlice"
import Footer from "./footer"

export default function Products(){
  const products = useSelector(productsSelect);
  const status = useSelector(statusSelect);
  const searchData = useSelector(searchDataSelect);
  const foundedProducts = useSelector(searchItemsSelect);
  const dispatch = useDispatch();
  const cat=[];
  products.map(prod => cat.push(prod.category));
  
  useEffect(()=>{
    const elements =[]
    products.filter(el => {
      const elem = Object.values(el).toString().toLowerCase()
      if(elem.includes(searchData.toLowerCase())){
        elements.push(el)
      }
    })
    dispatch(searchProduct(elements))
  },[searchData])

  useEffect(()=> {
    dispatch(fetchProducts())
  },[dispatch])

  
   
  

  return(
    <div className="root position-relative " >
      {status === 'loading' && <h1 className="  auth-form" role='alert'>Загрузка</h1>}
      <Header/>
      {foundedProducts.length>0 ? 
        <div className="w-75  m-auto  d-flex flex-wrap gap-5 mb-5">
          {foundedProducts.map(el=><Card key={el.id}  product={el}/>)}          
        </div>
        :
         <div className="w-75  m-auto  d-flex flex-wrap gap-5 mb-5">
          {products.map(el=><Card key={el.id}  product={el}/>)}          
        </div>
      }
     
      <Footer/>
    </div>
  )
}