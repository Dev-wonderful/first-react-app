import React, {useState} from 'react';
import './App.css';
import productlist from './Products';

function Cart(){
    return(
        <>
            <div className='cart'>
                <div className='item-container'>

                </div>
            </div>
        </>
    );
}

const Cartcontent = () =>{
    const [contents, setContents] = useState([]);
    return(
        <div>
            {contents.map(contentlist => (
                <productlist 
                id={contentlist.id} 
                title={contentlist.title}
                price={contentlist.price}
                category={contentlist.category}
                description={contentlist.description}
                image={contentlist.image}  
                />
            ))};
        </div>
    )
}


export default Cart