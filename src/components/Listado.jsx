import React from 'react'
import Login from './Login';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
/*import swal from '@sweetalert/with-react';*/

const Listado = () => {
  
  const token = localStorage.getItem('token');
  const URL = "https://rickandmortyapi.com/api/character/"
  const [cardList, setcardList] = useState([]);

  useEffect(() => {
    axios.get(URL)
    .then(response => {
      const apiData = response.data;
      setcardList(apiData.results);
    })
   /* catch(error => {
       swal(<h2>Error, intentelo nuevamente</h2>)
    })*/
    
  }, [setcardList])
    
  console.log(cardList);
  
  


  

  return !token ?(
      <Login/>
    ) : (

      <main className='bg-black min-h-screen flex flex-wrap gap-20 justify-center py-14'>

        {
          cardList.map((oneCard, id) => {
            return(

              <section>
              <article className='w-56 h-[390px] rounded-xl bg-slate-200 shadow-2xl' key={id}>
              <div className='w-full h-44 rounded-xl overflow-hidden object-cover'>
                  <img className='w-full h-full object-cover'
                  src= {oneCard.image} alt="imagen pelicula" />
              </div>
              <div className='flex flex-col p-4'>
              <h3 className='text-black text-xl font-semibold pb-2 line-clamp-1'>{oneCard.name}</h3>
                <p className='text-black text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aspernatur voluptatem officiis ea nesciunt.</p>
                <Link to={`/detail?id=${oneCard.id}`}>
                <button className=' bg-black text-[12px] font-semibold uppercase text-white px-4 py-2
                  rounded-3xl cursor-pointer my-4 ml-10'>View Detail</button>
                </Link>
              </div>  
            </article>
            </section>
            )

          })
          
        }
      
      </main>
  

  )
};

export default Listado