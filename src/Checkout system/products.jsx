import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
//import Displayproducts from './Displayproducts';

const Products = ({ product, onAddToCart }) => {


    

        const Displayproducts = (props) => {

            

            const  item  = props.products;

            
            return(
                <>
                    
                    <div className='products'>

                        <div className='image-container'>


                            <img id='image' src={item.image} alt={item.title}/>

                            

                        </div>

                        <div className='item-container'>
                            
                            <div className='title'><p>{item.title}</p></div>
                            <div className='price'><p>${item.price}</p><button className='btn' onClick={() => props.onAddToCart(item)}>Add To Cart</button></div>
                            
                        </div>


                    </div>

                    
                    
                </>
            );
        };


        return(
            <div className='container container-flex '>
                {product.map(items => <Displayproducts key={items.id} products={items} onAddToCart={onAddToCart}/>)}
            </div>
        )




}


export default Products













