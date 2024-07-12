import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';
import { assets } from '../../assets/assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Effect to set active menu based on current URL path on component mount
  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case '/':
        setMenu("home");
        break;
      case '/exploremenu':
        setMenu("menu");
        break;
      case '#app-download':
        setMenu("mob-app");
        break;
      case '#footer':
        setMenu("contact");
        break;
      default:
        setMenu("home");
        break;
    }
  }, [location.pathname]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  };

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>Home</Link>
        <Link to="/exploremenu" onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>Menu</Link>
        <a href='#app-download' onClick={() => setMenu("mob-app")} className={`${menu === "mob-app" ? "active" : ""}`}>Mobile App</a>
        <a href='#footer' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {!token ? 
          <button onClick={() => setShowLogin(true)}>Sign In</button>
          : <div className='navbar-profile'>
              <img src={assets.profile_icon} alt="" />
              <ul className='navbar-profile-dropdown'>
                <li onClick={() => navigate('/myorders')}>
                  <img src={assets.bag_icon} alt="" /> <p>Orders</p>
                </li>
                <hr />
                <li onClick={logout}>
                  <img src={assets.logout_icon} alt="" /> <p>Logout</p>
                </li> 
              </ul>
            </div>
        }
      </div>
    </div>
  );
};

Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default Navbar;
