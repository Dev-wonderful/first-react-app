import React from 'react';
import './navbar.css'
import { FaCartPlus } from "react-icons/fa"
import { Link } from 'react-router-dom';
//import Cart from './cart';



function Navbar(props) {

    
    //console.log('props' + props.onShowSideBar)

    
    
    return(

        <>
            <nav className='nav'>
                
                <div className='nav-content-container flex'>
                
                    <Link to="#" className='menu-bars'>
                        <FaCartPlus onClick={props.onShowSideBar}/>
                    </Link>
                
                   

                    <ul className='nav-link flex'>
                       
                        <li>Products</li>

                    </ul>

                    <div className='nav-search w-3/5 sm:w-3/6 flex'>
                        <input type="text" placeholder='Search for Products'></input>
                        <button type='submit'>Search</button>
                    </div>

                </div>

            </nav>
        </>
            
    

    );
    
};


export default Navbar;