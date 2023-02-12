import { useState } from "react";
import { useDispatch} from "react-redux";
import { search } from "../store/searchSlice";


export default function SearchInput(){
  const [searchData, setSearchData] = useState('');
  const dispatch = useDispatch();

  function addSearch(e){
    e.preventDefault()
    dispatch(search(searchData))
  };

  return(
    <form onSubmit={(e)=> addSearch(e)}>
      <input 
        type='search'
        aria-label="Search"
        placeholder="search..."
        onChange={(e) => setSearchData(e.target.value)}
        onClick={(e)=> console.log(e)}
      />
      <input type='submit' value='поиск'/>
    </form>
  )
};