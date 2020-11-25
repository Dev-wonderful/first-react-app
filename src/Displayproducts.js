import React from 'react';
import './App.css';


Const Displayproducts = ({id, title, price, category, description, image}) =>{
    return(
        <>
            <div className='products'>
                <div className='product-container'>
                    <span>
                        <span>{id}</span>
                        <span>{title}</span>
                        <span>{category}</span>
                        <span>{description}</span>
                        <span>{price}</span>
                        <img url={image}/>
                    </span>
                </div>
            </div>
        </>
    );
}

//export default Displayproducts