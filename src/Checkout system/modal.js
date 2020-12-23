import React from 'react';

const Modal_Styles = {
    position: 'fixed',
    top: '50%',
    left: '0',
    zIndex: 1000,
    backgroundColor: 'lightblue',
    height: '70px',
    width: '80%',
    textAlign: 'center',
    lineHeight: '70px',
    transition: '500ms'
}

const Modal_Close = {
    position: 'fixed',
    top: '50%',
    left: '-800px',
    transition: '500ms',
    zIndex: 1000,
    backgroundColor: 'lightblue',
    height: '70px',
    width: '80%',
    textAlign: 'center',
    lineHeight: '70px',
}

const Modal = ({children, open}) => {
    

    return ( 
        <div style={(open) ? Modal_Styles : Modal_Close}>
            {children}
        </div>
     );
}
 
export default Modal;