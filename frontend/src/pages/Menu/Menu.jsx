
import React, { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Menu = () => {
    const [category,setCategory] = useState("All")

  return (
    <div className='menu-page'>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category}/>

      </div>
  );
};

export default Menu;
