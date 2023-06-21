import React, { useState } from "react";

const Search =({search})=>{

  const [searchValue,setSearchValue] = useState("");
  const handleSearch =(e)=> {
    setSearchValue(e.target.value)
  }
  const onClickSearch =()=> {
    search(searchValue)
  }

  return(
    <form className="search">
      <input type='text' onChange={handleSearch} value={searchValue}/>
      <input type='submit' onClick={onClickSearch} value='SEARCH'/>
    </form>
  )
}

export default Search;