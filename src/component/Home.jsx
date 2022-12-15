import React from 'react';
import Products from './Products';

const Home = () => {
    return (
        <div className='hero'>
            <div className='container'>
            <h5 class="card-title display-3 fw-bolder mb-0">New Season arrival</h5>
                    <p class="card-text">CHECKOUT ALL NEW</p> <p class="card-text"><small>Last updated 3 mins ago</small></p>
            
            </div>
            <Products/>
                    </div>
    );
}

export default Home;