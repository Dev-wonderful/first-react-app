import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
//import Displayproducts from './Displayproducts';

export function Products(){


    function Productdata(){

        useEffect(() => {
            fetchItems();
        },[]);
    
        const [Contents, setContents] = useState([]);
    
        const fetchItems = async () => {
            const data = await fetch('https://fakestoreapi.com/products');
        
            const items = await data.json();
            console.log(items);
            setContents(items);
        };
        //console.log(Contents[8]);

        return(
            <div className='container'>
                {Contents.map(contentlist => (
                    <Displayproducts key={contentlist.id} id={contentlist.id} title={contentlist.title} price={contentlist.price} category={contentlist.category} description={contentlist.description} image={contentlist.image} />

                    )
                )};
            </div>
        )
    }

    
    return(
        <div>
            
            <Productdata />
        </div>
    );

    
    
}

function Displayproducts({id, title, price, category, description, image}){

    <Displayproducts key={id}/>

    console.log(id);
    return(
        <>
            
            <div className='products'>

                <div className='image-container'>
                    <img id='image' src={image} alt={title}/>
                </div>


                <div className='item-container'>

                    
                    <div className='title'><p>{title}</p></div>
                        
                    <div className='price'><p>${price}</p></div>
                        
                    
                    
                </div>
            </div>

            
        </>
    );
};

//ReactDOM.render(<Products />, document.querySelector('#container'))











