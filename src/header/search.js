import { useState } from "react";
import { useDispatch} from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { search } from "../store/searchSlice";


export default function SearchInput(){
  const [searchData, setSearchData] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()
  function addSearch(e){
    e.preventDefault()
    dispatch(search(searchData))
    if(!searchData){
      navigate('/')
    }
  };

 
 

  return(
    <form role='search' onSubmit={(e)=> addSearch(e)}>
      <input 
        type='search'
        aria-label="Search"
        value={searchData}
        placeholder="search..."
        onChange={(e) => setSearchData(e.target.value)}
        onClick={(e) => console.log(e.search)}
        className='position-relative'
      />
      <input type='submit' value='поиск'/>
    </form>
  )
};