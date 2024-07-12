import React from 'react';
import './ExploreMenu.css';
import { food_list } from '../../assets/assets'; // Import food_list from assets

const ExploreMenu = () => {
  return (
   
      <section className="popular-dishes">
        <h2>Popular Dishes</h2>
        <div className="dishes">
          {food_list.map((item, index) => (
            <div className="dish" key={index}>
              <img src={item.image} alt={`Dish ${index + 1}`} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
        </div>
      </section>
  );
};

export default ExploreMenu;
