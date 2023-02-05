import { useEffect, useState } from "react"
import productsAPI from "../api/productsAPI"


export default function SearchInput(){
  const [search, setSearch] = useState('')
  const [searchProd, setSearchProd] = useState()
  function searchSubmit(e){
    e.preventDefault()

    
  }
  // useEffect(()=>{
  //       productsAPI.searchProduct(search)
  //       .then(resp => console.log(resp))
  //     },[searchSubmit])

  return(
    <form onSubmit={searchSubmit}>
      <input 
        type='text'
        name="search"
        placeholder="Search.." 
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">поиск</button>
    </form>
  )
}