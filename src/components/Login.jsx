import React from 'react'
import axios from 'axios';
import swal from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';




const Login = () => {

    const navigate = useNavigate();

    const handlerSubmit = (e) => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^(([^<>()[\],;:\s@]+(\.[^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i; 

        if (email === '' || password === '') {
            swal(<h2>Los campos no pueden estar vacios</h2>);
            return;
        }

        if (email !== '' && !regexEmail.test(email)) {
            swal(<h2>Direccion de correo invalida</h2>);
            return;
        }

        if (email !== 'challenge@alkemy.org' || password !== 'react') {
            swal(<h2>Credenciales incorrectas</h2>);
            return;
        }

        axios.post('http://challenge-react.alkemy.org', {email, password})

        .then(res => {
           /* swal(<h2>Te logueaste correctamente</h2>);*/
            const tokenRecibido = res.data.token;
            localStorage.setItem('token', tokenRecibido);
            navigate('/listado');
        })
    }


  return (
    
    <main className='bg-black text-white min-h-screen flex justify-center 
    items-center flex-col'>
        <form className='h-80 w-80 rounded-xl bg-black' onSubmit={handlerSubmit}>
            <h2 className='m-4 font-semibold text-2xl text-white ml-16'>Alkemy Challenge</h2>
            <div className='bg-black h-10 rounded-lg flex items-center px-4 my-6
            border-yellow-300 border-2'>
                <input type="text" 
                name='email'
                placeholder='Email' 
                className='outline-none bg-black'/>
            </div>
            <div className='h-10 rounded-lg flex items-center px-4 my-6 bg-black 
            border-yellow-300 border-2'>
                <input type="password"
                name='password' 
                placeholder='Password' 
                className='outline-none bg-black'/>
            </div>
            <button type='submit' className='w-full bg-teal-700 h-9 rounded-2xl 
            text-slate-900 font-semibold mt-8'>
                Login
            </button>
        </form>
    </main>

  )
}

export default Login