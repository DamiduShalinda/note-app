import React from 'react'

const Header = ({ handleDarkMode }) => {
  return (
    <div className='flex justify-between pb-5'>
        <h1 className='text-6xl'>Notes.</h1>
        <button className='border border-black'onClick={handleDarkMode}>Toggle</button>
    </div>
  )
}

export default Header


// () => {handleDarkMode((previousDarkMode) => !previousDarkMode)}