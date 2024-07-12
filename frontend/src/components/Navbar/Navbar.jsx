import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const { token, setToken, getTotalCartAmount } = useContext(StoreContext);
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  };

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
      <ul className="navbar-menu">
        <li onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>Home</li>
        <li onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>Menu</li>
        <li onClick={() => setMenu("about-us")} className={`${menu === "about-us" ? "active" : ""}`}>About Us</li>
        <li onClick={() => setMenu("contact-us")} className={`${menu === "contact-us" ? "active" : ""}`}>Contact Us</li>
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

export default Navbar;
