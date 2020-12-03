import React from 'react';

const CartItem = (props) => {

    const item = props.item;

    
        return (
            <div className='cart-container'>

                <div className='cart-image-container'>

                    <img id='image' src={item.image} alt={item.title}/>

                </div>

                <div className='other-container container-flex'>

                    <p>{item.description}</p>

                    <p>{item.category}</p>

                    <div className='bottom-container'>

                        <p>${item.price}</p>
                        
                        <button className='btn' onClick={() => props.onRemove(item)}>Remove</button>

                    </div>

                </div>

            </div>
        );
    
}


 
 
export default CartItem;