import React, { useState } from "react";
import { Link } from "react-router-dom";
import argentBankLogo from '../../assets/argentBankLogo.png';

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // État de connexion, initialisé à false

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    // Logique de déconnexion, par exemple : setIsLoggedIn(false);
    setIsLoggedIn(false);
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isLoggedIn ? (
          // Afficher "Sign Out" lorsque l'utilisateur est connecté
          <Link to="/logout" className="main-nav-item" onClick={handleLogout}>
            <i className="fa fa-user-circle"></i>
            Sign Out
          </Link>
        ) : (
          // Afficher "Sign In" lorsque l'utilisateur n'est pas connecté
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Nav;
