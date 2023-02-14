import { useDispatch} from "react-redux";
import { search } from "../store/searchSlice";


export default function SearchInput(){
  const dispatch = useDispatch();

  return(
    <form role='search' >
      <input 
        type='search'
        aria-label="Search"
        placeholder="search..."
        onChange={(e) => dispatch(search(e.target.value))}
        className='rounded p-2 border-3'
      />
    </form>
  )
};