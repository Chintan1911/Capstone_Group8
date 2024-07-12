import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import './Home.css';
import { assets } from '../../assets/assets.js';

const Home = () => {
  const [category, setCategory] = useState('All');

  return (
    <>
      <Header />
      <section className="welcome-message">
        <h2>Welcome to Food Dash</h2>
        <p>Your favorite meals delivered right to your doorstep. Explore our diverse menu and experience culinary excellence.</p>
      </section>
      <section className="popular-dishes">
        <h2>Popular Dishes</h2>
        <div className="dishes">
          <div className="dish">
            <img src={assets.salmon} alt="Dish 1" />
            <h3>Grilled Salmon</h3>
          </div>
          <div className="dish">
            <img src={assets.alfrado} alt="Dish 2" />
            <h3>Chicken Alfredo</h3>
          </div>
          <div className="dish">
            <img src={assets.salid} alt="Dish 3" />
            <h3>Vegan Salad</h3>
          </div>
        </div>
      </section>
      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <ul>
          <li>Fresh Ingredients</li>
          <li>Fast Delivery</li>
          <li>Wide Variety</li>
          <li>Excellent Customer Service</li>
        </ul>
      </section>
     
    </>
  );
};

export default Home;
