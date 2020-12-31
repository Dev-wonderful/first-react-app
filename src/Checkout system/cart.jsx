import React from 'react';
import { AiOutlineClose } from "react-icons/ai"
import CartItem from './cartItem';
import { Link } from 'react-router-dom';
import './sidebar.css'

const Cart = ({ item, onRemove, onClearCart, totalPrice, sideBar, onCloseSideBar, onCartQtyIncrement, onCartQtyDecrement, quanty, quantityState }) => {

   //console.log('onremove ' + onRemove)
   const cartQuantity = (def) => {
       //console.log(quantityState)

        const list = quantityState.map(element => element.id)
        //console.log('list is ' + list)
        const found = list.find(element => element === def)
        //console.log(' found is ' + found)
        const main = quantityState.map(element => {
            if(element.id === found){
                return element
            }
            return null
        })
        //console.log(`main is ${main}`)
        const foundMain = main.find(element => element)
        //console.log(`foundMain is ${JSON.stringify(foundMain)}`)

        return foundMain

   }

   const emptyCart = () => {
       const items = item.map(c => c)
       if (items.length === 0){
           return (
               <>
                    <p className='empty'>I Am Empty, Please Fill Me Up</p>
               </>
           )
       }
   }

   

        return ( 
            <div className={sideBar ? 'cart active w-screen sm:w-4/5 md:w-9/12' : 'cart w-0'}>


                <div className='flexx'>
                    <button className='clear-btn' onClick={() => onClearCart()}>Clear Cart</button>
                    <Link to="#" className='bg-red-600'>
                        <AiOutlineClose onClick={onCloseSideBar}/>
                    </Link>
                </div>


                {emptyCart()}


                {item.map(item => <CartItem key={item.id} item={item} onRemove={onRemove} onCartQtyIncrement={onCartQtyIncrement} onCartQtyDecrement={onCartQtyDecrement} quanty={cartQuantity(item.id)} qtystate={quantityState}/>)}
                
                <div className='total-price'>Total price: ${totalPrice}</div>

                
            </div>
         );
    
}
 
export default Cart;