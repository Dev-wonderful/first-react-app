import React from 'react';



const Modal = ({children, open}) => {
    

    return ( 
        <div className={open ? 'modal-styles' : 'modal-close'}>
            {children}
        </div>
     );
}
 
export default Modal;