import React from 'react';
import './product.css';

const Quantity = ({ qty, qtyState, id }) => {
   // console.log('qtystate ' + qtyState())
    //console.log('state ' + qty)
    //id.map(Id => qtyState(Id))
    console.log('hi')
    
    return ( 
        <>
                    
                        <button className='decrement flex-1'>-</button>
                        <span className='qty-display flex-1'>{qty.value}</span>
                        <button className='increment flex-1'>+</button>
                    
                

        </>
     );
}
 
export default Quantity;