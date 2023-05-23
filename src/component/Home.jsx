import React from 'react';
import Products from './Products';

const Home = () => {
    return (
        <div className="hero">
        <div class="card bg-dark text-white border-0">
        <img src="/assets/bg.jpg" class="card-img" alt="background" style={{opacity: 0.5}} />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
         
          <h5 class="card-title display-3 fw-bolder mb-0">NEW ARRIVAL</h5>
          <p class="card-text lead fs-2">CHECK ALL TRENDS</p>
          </div>
        </div>
      </div>
      <Products/>
      </div>
    );
};

export default Home;