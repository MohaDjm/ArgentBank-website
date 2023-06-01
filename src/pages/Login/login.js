import React from 'react';
import './login.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authSlice';
import Navbar from '../../components/Navbar/navbar';
import SignInForm from '../../components/signInForm/signInForm';
import Footer from '../../components/Footer/footer';
import data from '../../data/users.json';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const user = data.find(user => user.email === email && user.password === password);

    if (user) {
      // Connexion réussie, dispatch de l'action de connexion
      dispatch(login());
    } else {
      // Connexion échouée, afficher un message d'erreur ou effectuer une action appropriée
      console.log("Email or password is incorrect");
    }
  };

  return (
    <div>
      <Navbar />
      <main className="main bg-dark">
        <SignInForm onLogin={handleLogin} />
      </main>
      <Footer />
    </div>
  );
};

export default Login;
