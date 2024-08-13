import React, { useState } from 'react';
import { assets } from '../../assets/assets.js';
import './Home.css';
import emailjs from '@emailjs/browser';

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = 'service_1di1iui';
    const templateId = 'template_1k6nmhq';
    const publicKey = '84hGVrVPTNJHUeloS';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'FoodDash',
      message: message
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.log('Error while sending email', err);
      });
  }

  return (
    <>
<<<<<<< Updated upstream
      <Header />
      <ExploreMenu setCategory={setCategory} category={category} />
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
          <div className="dish">
            <img src={assets.pita_bowl} alt="Dish 4" />
            <h3>Pita Bowl</h3>
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
      <section className="quick-contact">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className='emailForm'>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
};

export default Home;
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
