import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import rock from '../images/rockGlass.svg';

export default function Login() {
  const navigate = useNavigate();

  return (
    <section className="login">
      <div>
        <img src={ rock } alt="logo" className="logo" />
        <h1>Zé Biritis Delivery</h1>
      </div>
      <form action="submit" method="post" className="loginForm">
        <label htmlFor="email">
          Login:
          <input
            type="email"
            name="email"
            className="email"
            placeholder="email@trybeer.com"
          />
        </label>
        <label htmlFor="pass">
          Senha:
          <input
            type="password"
            name="pass"
            className="pass"
            placeholder="*******"
          />
        </label>
        <button type="submit" className="loginButton">LOGIN</button>
        <button
          type="button"
          className="registerButton"
          onClick={ () => navigate('/register') }
        >
          Ainda não tenho conta
        </button>
      </form>
    </section>
  );
}
