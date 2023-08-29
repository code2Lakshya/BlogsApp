import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Footer = () => {
  const {page,totalPages,handlePageChange}=useContext(AppContext);
  return (
    <div className='fixed bottom-0 z-1 w-full flex 
    justify-center items-center gap-5 py-2 bg-white border'>
    {page>1 &&
    <button className=' bg-gray-300 p-2' 
    onClick={()=>handlePageChange(page-1)}>Previous</button>}
    {page<totalPages && 
    <button className='bg-gray-300 p-2'
    onClick={()=> handlePageChange(page+1)}>Next Page</button>}
    <p>Page {page} of {totalPages}</p>
    </div>
  )
}

export default Footer