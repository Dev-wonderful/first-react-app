import React from 'react';

const Hero = (props) => {
    return ( 
        <div className="hero">
            <div className="hero-container">
                <h1>Journey To Commercial Comfort</h1>
                <p>Shop with ease</p>
            </div>

            <div className='action'>
                <button onClick={(e) => props.filter(e.target.innerText)}>All Categories</button>
                <button onClick={(e) => props.filter(e.target.innerText)}>Electronics</button>
                <button onClick={(e) => props.filter(e.target.innerText)}>Jewelery</button>
                <button onClick={(e) => props.filter(e.target.innerText)}>Women Clothing</button>
                <button onClick={(e) => props.filter(e.target.innerText)}>Men Clothing</button>
            </div>
        </div>
     );
}
 
export default Hero;