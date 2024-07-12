import React, { useState, useContext } from 'react';
import './ExploreMenu.css';
import { StoreContext } from '../../Context/StoreContext';
import { food_list } from '../../assets/assets'; 
const ExploreMenu = () => {
  const { menu_list } = useContext(StoreContext); 
  const [selectedCategory, setSelectedCategory] = useState('All'); 

  const handleMenuClick = (category) => {
    setSelectedCategory(category); 
  };

  
  const filteredFood = selectedCategory === 'All' ? food_list : food_list.filter(item => item.category === selectedCategory);

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className="explore-menu-list">
        <div className={`explore-menu-list-item ${selectedCategory === 'All' ? 'active' : ''}`} onClick={() => handleMenuClick('All')}>
          <p>All</p>
        </div>
        {menu_list.map((item, index) => (
          <div key={index} className={`explore-menu-list-item ${selectedCategory === item.menu_name ? "active" : ""}`} onClick={() => handleMenuClick(item.menu_name)}>
            <img src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
      <section className="popular-dishes">
        <h2>{selectedCategory !== 'All' ? `Popular ${selectedCategory} Dishes` : 'Popular Dishes'}</h2>
        <div className="dishes">
          {filteredFood.map((item, index) => (
            <div className="dish" key={index}>
              <img src={item.image} alt={`Dish ${index + 1}`} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

ExploreMenu.propTypes = {
  // If needed, define propTypes for context or other props
};

export default ExploreMenu;
