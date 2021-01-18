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
                
                <div className='nav-content-container '>
                
                    <Link to="#" className='menu-bars'>
                        <FaCartPlus onClick={props.onShowSideBar}/>
                    </Link>
                
                   

                    <ul className='nav-link'>
                       
                        <li>All Products Are Not Real</li>

                    </ul>

                    <div className='dropdown'>
                        <button className='drop-btn'>Category</button>
                        <div className='dropdown-content'>
                            <li>Men Clothing</li>
                            <li>Jewelery</li>
                            <li>Electronics</li>
                            <li>Women Clothing</li>
                            <li>All Categories</li>
                        </div>
                    </div>

                </div>

            </nav>
        </>
            
    

    );
    
};


export default Navbar;