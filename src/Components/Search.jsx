import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({handleSearchNote}) => {
  return (
    <div className='flex items-center border-none bg-gray-200  rounded-[10px] p-[5px] mb-6'>
        <MdSearch size='1.3rem' className='mr-4'/>
        <input type="text" placeholder='Type to search ...' onChange={(event) => {handleSearchNote(event.target.value)}} className='bg-gray-200 focus:outline-none grow'/>
    </div>
  )
}

export default Search