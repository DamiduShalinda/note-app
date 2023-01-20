import React from 'react'
import { MdDeleteForever} from 'react-icons/md'

const Notes = ( {id , text , date , deleteNote} ) => {

 const handleDeleteNote = () => {
      deleteNote(id);
  }
  return (
    <div className="flex flex-col bg-[#fef68a] min-w-[250px] p-4 min-h-[170px] rounded-[10px] mb-4 justify-between whitespace-pre-wrap">
    <span>{text}</span>
    <div className='flex justify-between'>
        <small>{date}</small>
        <MdDeleteForever size="1.3rem" onClick={handleDeleteNote} className="cursor-pointer"/>
    </div>
    </div>
  )
}

export default Notes