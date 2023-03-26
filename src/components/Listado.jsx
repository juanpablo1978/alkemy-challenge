import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const Listado = () => {
  
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
      if (token === null) {
        navigate('/')
      }
  }, [navigate]);

  return (
    
    <main className='bg-black min-h-screen flex justify-center 
    items-center border-t-4 border-b-4 border-teal-700'>
      <article className='w-48 h-96 rounded-xl bg-slate-50'>
        <div className='w-full h-36 rounded-xl overflow-hidden'>
            <img className='w-full h-full object-cover' src= 'https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="imagen pelicula" />
        </div>
        <div className='flex flex-col p-3'>
        <h3 className='text-black text-xl font-semibold pb-2'>Título</h3>
          <p className='text-black text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora velit eveniet enim quidem, explicabo odio, ut laudantium eos tenetur repellendus dolor. Voluptas eos dolore.</p>
        </div>  
      </article>
    </main>
  )
}

export default Listado