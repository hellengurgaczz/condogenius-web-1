import React from 'react';

import './Login.css';

import logo from '../../assets/condogenius.png'

const Login = () =>  (
    <div className='content'>
        <img src={logo} className='logo' alt='logo condogenius'></img>
        <h3>Login</h3>
        <input type="text" placeholder="Digite seu e-mail" />
        <input type="password" placeholder="Digite sua senha" />
        <button>Entrar</button>
        <a href=''>Cadastre-se</a>
    </div>
);

export default Login;
