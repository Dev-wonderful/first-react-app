import React from 'react';
import { AiOutlineClose } from "react-icons/ai"
import CartItem from './cartItem';
import { Link } from 'react-router-dom';
import './sidebar.css'

const Cart = ({ item, onRemove, onClearCart, totalPrice, sideBar, onCloseSideBar }) => {

   //console.log('onremove ' + onRemove)
    
        return ( 
            <div className={sideBar ? 'cart active w-screen sm:w-4/5 md:w-9/12' : 'cart w-0'}>


                <div className='flexx'>
                    <button className='clear-btn' onClick={() => onClearCart()}>Clear Cart</button>
                    <Link to="#" className='menu-bars'>
                        <AiOutlineClose onClick={onCloseSideBar}/>
                    </Link>
                </div>

                {item.map(item => <CartItem key={item.id} item={item} onRemove={onRemove}/>)}
                
                <div className='total-price'>Total price: ${totalPrice}</div>

                
            </div>
         );
    
}
 
export default Cart;