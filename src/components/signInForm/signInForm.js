import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { Link } from 'react-router-dom';
import { setUserToken, setLoginInfos } from "../../redux/userSlice";
// import userData from '../../data/users.json';

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    

    // Recherche de l'utilisateur correspondant aux informations de connexion
    // const user = userData.find(
    //   (user) => user.email === username && user.password === password
    // );

    const data = {
      email: username,
      password: password,
    };
    console.log(data);

    Axios.post("http://localhost:3001/api/v1/user/login", data)
      .then((response) => {
        dispatch(setLoginInfos(data));
        dispatch(setUserToken(response.data.body.token));
        console.log("Token:", response.data.body.token);
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
        console.error("Cet identifiant ou ce mot de passe est inconnu, veuillez réessayer.");
      });

    // if (user) {
    //   // Redirection vers la page de profil si les informations sont correctes
    //   window.location.href = '/profile';
    // } else {
    //   // Affichage d'un message d'erreur si les informations sont incorrectes
    //   setErrorMessage('Invalid username or password');
    // }
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </section>
  );
};

export default SignInForm;
