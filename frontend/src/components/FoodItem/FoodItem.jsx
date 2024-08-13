// src/components/FoodItem/FoodItem.jsx
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ image, name, price, desc, id }) => {
    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={url + "/images/" + image} alt={name} />
                {!cartItems[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add to cart" />
                    : <div className="food-item-counter">
                        <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="Remove from cart" />
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="Add to cart" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p> <img src={assets.rating_starts} alt="Rating stars" />
                </div>
                <p className="food-item-desc">{desc}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
};

FoodItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default FoodItem;
