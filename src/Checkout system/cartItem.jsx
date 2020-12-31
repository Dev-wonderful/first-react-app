import React from 'react';
import './sidebar.css'

const CartItem = (props) => {

    const item = props.item;
    //const qtyState = props.quantityState
    console.log(props.quanty)

   

    
        return (
            <div className='cart-container cart-grid px-4 py-4'>

                <div className='cart-image-container w-4/5 h-2/5 sm:w-1/5 sm:h-3/5'>

                    <img id='cart-image' src={item.image} alt={item.title}/>

                </div>

                <div className='other-container w-4/5 sm:w-9/12 container-flex'>

                    <div className='description'>{item.description}</div>

                    <p>Category: {item.category}</p>

                    <div className='bottom-container flex'>

                        <p className='cart-price'>${item.price}</p>
                        
                        <button className='remove-btn' onClick={() => props.onRemove(item)}>Remove</button>

                        <div className='qty flex flex-row px-2'>
                            <button className='decrement flex-1' onClick={() => props.onCartQtyDecrement(props.quanty)}>-</button>
                            <span className='qty-display flex-1'>{props.quanty.value}</span>
                            <button className='increment flex-1' onClick={() => props.onCartQtyIncrement(props.quanty)}>+</button>
                        </div>


                    </div>

                </div>

            </div>
        );
    
}


 
 
export default CartItem;