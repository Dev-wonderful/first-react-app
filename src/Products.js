import React, {useState, useEffect} from 'react';
import './App.css';
//import Displayproducts from './Displayproducts';

function Products(){

    useEffect(() => {
        fetchItems();
    },[]);

    const [Contents, setContents] = useState([]);

    const fetchItems = async (array) => {
        const data = await fetch('https://fakestoreapi.com/products');

        const items = await data.json();
        console.log(items);
        setContents(items);
    };

    Contents.map(contentlist => {
        return (<Displayproducts id={contentlist.id} title={contentlist.title} price={contentlist.price} category={contentlist.category} description={contentlist.description} image={contentlist.image} />
        );
    });

    function Displayproducts({id, title, price, category, description, image}){
        return(
            <>
                <div className='products'>
                    <div className='product-container'>
                        <div>
                            <span>{id}</span>
                            <span>{title}</span>
                            <span>{category}</span>
                            <span>{description}</span>
                            <span>{price}</span>
                            <img src={image} />
                            <button type='submit'>Purchase</button>
                        </div>
                    </div>
                </div>

                
            </>
        );
    };

    
    
}








export default Products