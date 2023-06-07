import React from 'react';
import './login.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar/navbar';
import SignInForm from '../../components/signInForm/signInForm';
import Footer from '../../components/Footer/footer';
import { setUserToken, setLoginInfos } from "../../redux/userSlice";
import Axios from "axios";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

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
  };

  return (
    <div>
      <Navbar />
      <main className="main bg-dark">
        <SignInForm onLogin={handleSubmit} />
      </main>
      <Footer />
    </div>
  );
};

export default Login;
