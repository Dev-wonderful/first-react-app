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

                    <div className='menu-bars-block'>

                        <Link to="#" className='menu-bars'>
                            <FaCartPlus onClick={props.onShowSideBar}/>
                        </Link>

                    </div>
                
                
                   <div className='nav-content-block'>

                        <ul className='nav-link'>
                        
                            <li>All Products Are Not Real</li>

                        </ul>

                        <div className='dropdown'>
                            <button className='drop-btn'>Category</button>
                            <div className='dropdown-content'>
                                <li onClick={(e) => props.filter(e.target.innerText)}>Men Clothing</li>
                                <li onClick={(e) => props.filter(e.target.innerText)}>Jewelery</li>
                                <li onClick={(e) => props.filter(e.target.innerText)}>Electronics</li>
                                <li onClick={(e) => props.filter(e.target.innerText)}>Women Clothing</li>
                                <li onClick={(e) => props.filter(e.target.innerText)}>All Categories</li>
                            </div>
                        </div>

                   </div>


                </div>

            </nav>
        </>
            
    

    );
    
};


export default Navbar;