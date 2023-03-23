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
    
    <h2>Soy el componente listado</h2>
  )
}

export default Listado