import { useDispatch } from "react-redux"
import { addProduct } from "../store/cartSlice"

export default function AddToCart({product}) {
  const dispatch = useDispatch()

  function choose(product){
    product={...product, count:1}
    dispatch(addProduct(product))
  }

  return(
    <div>
      <button type="button" className="btn btn-success" onClick={()=> choose(product)}>добавить в корзину</button>
    </div>
  )
}