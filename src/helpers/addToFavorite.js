import { useDispatch } from "react-redux"
import { addFavorite } from "../store/favoriteSlice"

export default function AddToFavorite({product}){
  const dispatch = useDispatch()

  

  return(
    <div>
      <button type="button" className="btn btn-outline-warning" onClick={()=> dispatch(addFavorite(product))}>добавить в избраное</button>
    </div>
  )
}