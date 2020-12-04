import React from 'react';
import './sidebar.css'

const CartItem = (props) => {

    const item = props.item;

    
        return (
            <div className='cart-container cart-grid'>

                <div className='cart-image-container'>

                    <img id='cart-image' src={item.image} alt={item.title}/>

                </div>

                <div className='other-container container-flex'>

                    <div className='description'>{item.description}</div>

                    <p>Category: {item.category}</p>

                    <div className='bottom-container flex'>

                        <p className='cart-price'>${item.price}</p>
                        
                        <button className='remove-btn' onClick={() => props.onRemove(item)}>Remove</button>

                    </div>

                </div>

            </div>
        );
    
}


 
 
export default CartItem;