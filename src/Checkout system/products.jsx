import React from 'react';
//import ReactDOM from 'react-dom';
import './product.css';
//import Modal from "./modal";
//import Quantity from './quantity';
//import '../index.css';
//import Displayproducts from './Displayproducts';

const Products = ({ product, onAddToCart, quant, onQtyIncrement, onQtyDecrement, filter}) => {

    //console.log('baba' + quant)
    

    const loop = (def) => {
        const list = quant.map(element => element.id)
        //console.time('list is ')
        const found = list.find(element => element === def)
        //console.log(' found is ' + found)
        const main = quant.map(element => {
            if(element.id === found){
                return element
            }
            return null
        })
        //console.log(`main is ${main}`)
        const foundMain = main.find(element => element)
        //console.log(`foundMain is ${foundMain}`)

        return foundMain

        
    }
    

        const Displayproducts = ({item, qty, onAddToCart}) => {
            
            //console.log('eagle' + JSON.stringify(item))
       // console.log('eaglet' + JSON.stringify(qty))

            //const  item  = props.products;
            //const quantityState = props.quantityState;
            //const quantity = props.quantity;

            
            
            
            return(
                <>
                    
                    <div className='products'>

                        <div className='p-image-container'>


                            <img className='p-image' src={item.image} alt={item.title}/>

                            

                        </div>

                        <div className='p-item-container'>
                            
                            <div className='p-title '><p>{item.title}</p></div>
                           
                            <div className='p-price'>
                                <p>${item.price}</p>

                                <div className='p-qty '>
                                    <button className='p-decrement' onClick={() => onQtyDecrement(qty)}>-</button>
                                    <span className='p-qty-display'>{qty.value}</span>
                                    <button className='p-increment' onClick={() => onQtyIncrement(qty)}>+</button>
                                </div>

                            </div>
                            
                            <div className='p-btn-div'><button className='p-btn ' onClick={() => onAddToCart(item, qty)}>Add To Cart</button></div>

                        </div>


                    </div>

                    
                    
                </>
            );
        };

        
         


        return(
            <div className='p-container p-container-flex '>

                

                {product.map((items) => <Displayproducts key={items.id} item={items} onAddToCart={onAddToCart} qty={loop(items.id)}/>
                    
                )}
                    
                
            </div>
        )




}


export default Products














