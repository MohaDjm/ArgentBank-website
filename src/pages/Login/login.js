import React from 'react';
import './login.css';
import Navbar from '../../components/Navbar/navbar';
import SignInForm from '../../components/signInForm/signInForm';
import Footer from '../../components/Footer/footer';


const Login = () => {
  return (
    <div>
      <Navbar />
      <main className="main bg-dark">
        <SignInForm />
      </main>
      <Footer />
    </div>
  );
};

export default Login;
