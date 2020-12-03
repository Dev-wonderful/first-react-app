import React from 'react';
import CartItem from './cartItem';

const Cart = ({ item, onRemove, onClearCart, totalPrice }) => {
    
        return ( 
            <div className='cart'>
                <button className='btn' onClick={() => onClearCart()}>Clear Cart</button>
                {item.map(item => <CartItem key={item.id} item={item} onRemove={onRemove}/>)}
                <span className='total-price'>Total price: ${totalPrice}</span>
            </div>
         );
    
}
 
export default Cart;