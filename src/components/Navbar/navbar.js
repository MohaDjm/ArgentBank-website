import React from "react";
import { Link } from "react-router-dom";
import argentBankLogo from '../../assets/argentBankLogo.png';

function Nav({ isLoggedIn, handleLogout, pseudo }) { // Ajoutez pseudo comme paramètre
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
          <div>
            <p className="user-pseudo">{pseudo}</p> {/* Utilisez le prop pseudo pour afficher la valeur */}
            <Link to="/login" className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-user-circle"></i>
              Sign Out
            </Link>
          </div>
        ) : (
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
