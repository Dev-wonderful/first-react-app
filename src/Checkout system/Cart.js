import React, {useState, useEffect} from 'react';
import './App.css';

    function Cart () {

    

            //firstly i wamt to get the stored array index from the local storage
            //secondly, use it to fetch the item from the source
            //thirdly, render it on a separate page


            const DisplayCartitems = ({category, description, price, image, title}) => {
                const display = (
                    <div className='cart-container'>
                        <div className='cart-image-container'>
                            <img id='cart-product-image' src={image} alt={title}/>
                        </div>
                        <div className='other-container container-flex'>
                            <p>{description}</p>
                            <p>{category}</p>
                            <div className='bottom-container'>
                                <p>${price}</p>
                                <button className='btn'>Remove</button>
                            </div>
                        </div>
                    </div>
                )
            }

            const Totalprice = () =>{
                Updatedcartcontent()
                return(
                    <div>
                        <DisplayCartitems />
                        <div>Total Price</div>
                    </div>
                )
            }


            //fetch the products from the database


            useEffect(() => {
                fetchItem();
            },[]);

            const [Items, setItems] = useState([]);

            const fetchItem = async () => {
                const data = await fetch('https://fakestoreapi.com/products');

                const items = await data.json();
            
                setItems(items);
            };

            //fetch array index from local storage 
                const index = () => {
                   return localStorage.getItem('arrayindex')
                }


                const Cartitem = Items[index].map(cartitem => { 
                return cartitem
                })

            const stuff = Cartitem

            const [Itemsincart, setItemsincart] = useState([]);

            

            const Updatedcartcontent = (stuff) => {
                setItemsincart([...Itemsincart, stuff]);

                return(
                    <div>
                        {Itemsincart.map(contentlist => (
                            <DisplayCartitems key={contentlist.id} id={contentlist.id} title={contentlist.title} price={contentlist.price} category={contentlist.category} description={contentlist.description} image={contentlist.image} />

                            )
                        )}
                    </div>
                );
            };
            

            return(
                <div>
                    <Totalprice />
                </div>
                
            )


    }


    export default Cart
    



