import React from 'react';
//import ReactDOM from 'react-dom';
import './product.css';
//import Modal from "./modal";
//import Quantity from './quantity';
//import '../index.css';
//import Displayproducts from './Displayproducts';

const Products = ({ product, onAddToCart, quant }) => {
    
    console.log('baba' + quant)
    

        const Displayproducts = ({item, qty, onAddToCart}) => {
            
            console.log('eagle' + item)
           // console.log('eaglet' + qty)

            //const  item  = props.products;
            //const quantityState = props.quantityState;
            //const quantity = props.quantity;

            const iteration = () => {
                for (var key in item) {
                    if (item.hasOwnProperty(key) && key === 'id'){
                        console.log('id ' + item[key])
                        for (let q of qty){
                            console.log('q ' + qty.indexOf(q))
                            for(var keyQ in  q){
                                console.log('keyQ ' + keyQ + ' ' + q.value)
                                if(q.hasOwnProperty(keyQ)){
                                    console.log('keyQ-YES')
                                    if(keyQ === 'id' && q[keyQ] === item[key]){
                                        console.log('Hurray i got here ' + q[keyQ] + ' ' + qty.indexOf(q))
                                        const qtity = q.value 
                                        console.log('hi ' +qtity) 
                                        return qtity
                                    }
                                }
                            }
                        }
                    }
                }    
                
            }

            
            
            return(
                <>
                    
                    <div className='products py-5 w-4/5 sm:w-3/6 md:w-96 lg:w-1/4'>

                        <div className='image-container box-border'>


                            <img className=' w-full h-full' src={item.image} alt={item.title}/>

                            

                        </div>

                        <div className='item-container'>
                            
                            <div className='title px-3 py-3 leading-none overflow-y-auto'><p>{item.title}</p></div>
                           
                            <div className='price space-x-2 leading-none px-2'>
                                <p>${item.price}</p>

                                <div className='qty flex flex-row px-2'>
                                    <button className='decrement flex-1'>-</button>
                                    <span className='qty-display flex-1'>{iteration()}</span>
                                    <button className='increment flex-1'>+</button>
                                </div>

                                <button className='btn w-1/3' onClick={() => onAddToCart(item)}>Add To Cart</button>
                            </div>
                            
                        </div>


                    </div>

                    
                    
                </>
            );
        };

        
         


        return(
            <div className='container container-flex h-screen w-screen '>

                

                {product.map((items) => <Displayproducts key={items.id} item={items} onAddToCart={onAddToCart} qty={quant}/>
                    
                )}
                    
                
            </div>
        )




}


export default Products













