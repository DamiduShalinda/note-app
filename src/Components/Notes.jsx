import React from 'react'
import { MdDeleteForever} from 'react-icons/md'

const Notes = () => {
  return (
    <div className="flex flex-col bg-[#fef68a] min-w-[250px] p-4 min-h-[170px] rounded-[10px] mb-4 justify-between">
    <span>This is a sample note!!!</span>
    <div className='flex justify-between'>
        <small>18/01/2023</small>
        <MdDeleteForever size="1.3rem"/>
    </div>
    </div>
  )
}

export default Notes