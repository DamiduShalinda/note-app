import React, { useState } from 'react'

const AddNote = () => {

    const [text , setText] = useState('');
    
    const handleEditText = (event) => {
        setText(event.target.value)
    }

  return (
    <div className="flex flex-col bg-[#67d7cc] min-w-[250px] p-4 min-h-[170px] rounded-[10px] mb-4 justify-between">
    <textarea 
        rows='5' cols='10' placeholder='Type to add a note ....' 
        className='border-none resize-none bg-[#67d7cc] focus:outline-none placeholder:text-gray-500'
        onChange={handleEditText} value={text}></textarea>
    <div className='flex justify-between'>
        <small>200 remaining</small>
        <button className='bg-[#e1e1e1] rounded-[10px] px-1 pb-1'>Save</button>
    </div>
    </div>
  )
}

export default AddNote