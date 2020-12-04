import React from 'react';
import './navbar.css'
import { FaBars } from "react-icons/fa"
import { Link } from 'react-router-dom';
//import Cart from './cart';



function Navbar(props) {

    
    //console.log('props' + props.onShowSideBar)

    
    
    return(

        <>
            <nav className='nav'>
                
                <div className='nav-content-container flex'>
                
                    <Link to="#" className='menu-bars'>
                        <FaBars onClick={props.onShowSideBar}/>
                    </Link>
                
                    <span className='nav-display flex'><p>I am here</p></span>

                    <ul className='nav-link flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Products</li>
                        <li>User Account</li>
                    </ul>

                    <div className='nav-search flex'>
                        <input type="text" placeholder='Search for Products'></input>
                        <button type='submit'>Search</button>
                    </div>

                </div>

            </nav>
        </>
            
    

    );
    
};


export default Navbar;