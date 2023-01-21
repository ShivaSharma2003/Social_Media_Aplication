import React from 'react'
import BottomBar from "../Components/Home/BottomBar"
import SearchBody from '../Components/Search/SearchBody'

const Search = () => {
  return (
    <div className='flex flex-col h-full'>
        <SearchBody />
        <BottomBar /> 
    </div>
  )
}

export default Search