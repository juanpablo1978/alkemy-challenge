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
          /*  swal(<h2>Te logueaste correctamente</h2>);*/
            const tokenRecibido = res.data.token;
            localStorage.setItem('token', tokenRecibido);
            navigate('/listado');
        })

    }

  return (
    <main>
        <form onSubmit={handlerSubmit}>
            <h2>Formulario de Login</h2>
            <div>
                <input type="text" name='email' placeholder='Email' />
            </div>
            <div>
                <input type="password" name='password' placeholder='Password'/>
            </div>
            <button type='submit'>
                Ingresar
            </button>
        </form>
    </main>
  )
}

export default Login