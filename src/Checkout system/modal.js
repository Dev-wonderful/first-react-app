import React from 'react';

const Modal_Styles = {
    position: 'fixed',
    top: '15%',
    left: '0',
    zIndex: 1000,
    backgroundColor: 'lightblue',
    height: '70px',
    width: '80%',
    textAlign: 'center',
    lineHeight: '70px',
    transition: '500ms',
    borderTopRightRadius: '15px',
    borderBottomRightRadius: '15px',
    fontStyle: 'italic',
    fontFamily: 'sanSerif',
    fontSize: 'larger'
}

const Modal_Close = {
    position: 'fixed',
    top: '15%',
    left: '-85vw',
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
        <div className={open ? 'modal-styles' : 'modal-close'}>
            {children}
        </div>
     );
}
 
export default Modal;