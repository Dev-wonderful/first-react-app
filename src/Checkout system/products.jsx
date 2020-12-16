import React from 'react';
//import ReactDOM from 'react-dom';
import './product.css';
//import '../index.css';
//import Displayproducts from './Displayproducts';

const Products = ({ product, onAddToCart }) => {


    

        const Displayproducts = (props) => {

            

            const  item  = props.products;

            
            return(
                <>
                    
                    <div className='products py-5 flex-initial'>

                        <div className='image-container box-border'>


                            <img className=' w-full h-full' src={item.image} alt={item.title}/>

                            

                        </div>

                        <div className='item-container'>
                            
                            <div className='title px-3 py-3 leading-none overflow-y-auto'><p>{item.title}</p></div>
                           
                            <div className='price space-x-2 leading-none px-2'>
                                <p>${item.price}</p>

                                <div className='qty flex flex-row px-2'>
                                    <button className='decrement flex-1'>-</button>
                                    <span className='qty-display flex-1'>1</span>
                                    <button className='increment flex-1'>+</button>
                                </div>

                                <button className='btn w-1/3' onClick={() => props.onAddToCart(item)}>Add To Cart</button>
                            </div>
                            
                        </div>


                    </div>

                    
                    
                </>
            );
        };


        return(
            <div className='container container-flex h-screen w-screen '>
                {product.map(items => <Displayproducts key={items.id} products={items} onAddToCart={onAddToCart}/>)}
            </div>
        )




}


export default Products













