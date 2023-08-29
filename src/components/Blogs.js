import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

const Blogs = () => {
  const { post, loading } = useContext(AppContext);
  return (
    <div className='py-16 flex flex-col min-h-screen w-11/12 max-w-[700px]
    mx-auto items-center justify-center gap-8'>
      {loading? <Spinner /> :
        (post.length === 0 ? (<h1>No Post Found</h1>) : (post.map((data) => {
          return (
            <div key={data.id} className=' flex flex-col gap-1'>
              <p className='font-bold'>{data.title}</p>
              <p className=' text-gray-500'>By <span>{data.author}</span> on <span>{data.category}</span></p>
              <p className=' text-gray-500 mb-3'>Posted On <span>{data.date}</span></p>
              <p className=' text-[15px] text-justify'>{data.content}</p>
              <div className='flex gap-x-3 text-blue-500 flex-wrap'>
                {data.tags.map((tag,index)=>{
                  return <span key={index} className=' text-[15px]'>#{tag}</span>
                })}
              </div>
            </div>
          );
        })))
      }
    </div>
  )
}

export default Blogs