import React from 'react';
import './sidebar.css'

const CartItem = (props) => {

    const item = props.item;

   

    
        return (
            <div className='cart-container'>

                <div className='cart-image-container'>

                    <img id='cart-image' src={item.image} alt={item.title}/>

                </div>

                <div className='other-container'>

                    

                    <div className='category-div'><p>Category: {item.category}</p></div>

                    <div className='bottom-container'>

                        <p className='cart-price'>${item.price}</p>
                        
                        <button className='remove-btn' onClick={() => props.onRemove(item, props.quanty)}>Remove</button>

                        <div className='qty'>
                            <button className='decrement' onClick={() => props.onCartQtyDecrement(props.quanty)}>-</button>
                            <span className='qty-display'>{props.quanty.value}</span>
                            <button className='increment' onClick={() => props.onCartQtyIncrement(props.quanty)}>+</button>
                        </div>


                    </div>

                </div>

            </div>
        );
    
}


 
 
export default CartItem;