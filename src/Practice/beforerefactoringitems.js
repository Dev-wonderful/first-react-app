import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
//import Displayproducts from './Displayproducts';

export function Products(){


    function Productdata(){

        //useEffect(() => {
        //    fetchItems();
       // },[]);
    
        
       // const fetchItems = async () => {
         //   const data = await fetch('https://fakestoreapi.com/products');
        
         //   const items = await data.json();
        //    console.log(items);
        //    setContents(items);
       // };
        //console.log(Contents[8]);

        //const itemlist = Contents.map(list => {
          //  return list
        //})
        return(
            <>
                
               

                <div className='container grid'>
                    {Contents.map(contentlist => (
                    <Displayproducts key={contentlist.id} id={contentlist.id} title={contentlist.title} price={contentlist.price} category={contentlist.category} description={contentlist.description} image={contentlist.image} />

                    )
                )};
                </div>

            </>
        )
    }



    
    return(
            <div>
               <data />
                <Productdata />
            </div>
    );

    
    
}

function Displayproducts({id, title, price, category, description, image}){

    <Displayproducts key={id}/>

    function Check(){

        const arrayindex = id-1

        
        localStorage.setItem("arrayindex", arrayindex)
        
        
        console.log(arrayindex)
       // document.querySelector('').style.display = 'block';

       

        return(
        <div className='view'>
                    
                    <img className='view-image' src='' alt=''/>
                    <p className='caption'>i am here</p>

        </div>
        );


    }


    console.log(id);
    return(
        <>
            
            <div className='products'>

                <div className='image-container'>

                  

                    <img id='image' src={image} alt={title} onClick={Check}/>

                    

                </div>

                <div className='item-container'>
                    
                    <div className='title'><p>{title}</p></div>
                    <div className='price'><p>${price}</p><button className='btn' onClick={Check}>Add to cart</button></div>
                    
                </div>


            </div>

            
            
        </>
    );
};

//ReactDOM.render(<Products />, document.querySelector('#container'))











