<<<<<<< Updated upstream
import React from 'react'
import './ExploreMenu.css'

const ExploreMenu = () => {
  return (
    <div>
      
    </div>
  )
}

export default ExploreMenu
=======
// src/components/ExploreMenu/ExploreMenu.jsx
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './ExploreMenu.css';
import { StoreContext } from '../../Context/StoreContext';

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list, food_list } = useContext(StoreContext);


  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className="explore-menu-list">
        <div className={`explore-menu-list-item ${category === 'All' ? 'active' : ''}`} onClick={() => setCategory('All')}>
          <p>All</p>
        </div>
        {menu_list.map((item, index) => (
          <div
            key={index}
            className={`explore-menu-list-item ${category === item.menu_name ? 'active' : ''}`}
            onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)}
          >
            <img src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
      <section className="popular-dishes">
        <h2>{category !== 'All' ? `Popular ${category} Dishes` : 'Popular Dishes'}</h2>
       
      </section>
    </div>
  );
};

ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default ExploreMenu;
>>>>>>> Stashed changes
