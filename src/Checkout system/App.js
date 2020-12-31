import './App.css';
import Navbar from './Nav'
import Products from './products.jsx';
import Cart from './cart';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, { Component } from 'react';
import Modal from './modal';
//import Modal from './modal';


class App extends Component {
  state = { 
    Productlist : [],

    cartItem : [],

    sideBar : false ,

    quantity : [
      {id: 1, value: 1},
      {id: 2, value: 1},
      {id: 3, value: 1},
      {id: 4, value: 1},
      {id: 5, value: 1},
      {id: 6, value: 1},
      {id: 7, value: 1},
      {id: 8, value: 1},
      {id: 9, value: 1},
      {id: 10, value: 1},
      {id: 11, value: 1},
      {id: 12, value: 1},
      {id: 13, value: 1},
      {id: 14, value: 1},
      {id: 15, value: 1},
      {id: 16, value: 1},
      {id: 17, value: 1},
      {id: 18, value: 1},
      {id: 19, value: 1},
      {id: 20, value: 1}
    ],

    isOpen : false


   }

   componentDidMount() {
     const apiUrl = 'https://fakestoreapi.com/products'
     fetch(apiUrl)
     .then((response) => response.json())
     .then((data) => this.setState({Productlist: data}))
   }

   

   handleAddToCart = (product, quantity) => {
     
     //const cartItem = [...this.state.cartItem];
     const products  = this.state.Productlist
     const index = products.indexOf(product);
     const item = products[index]
     if (this.state.cartItem.includes(item)){
       this.state.cartItem.find(element => {
         if(element.id === item.id){
           const repeatedItem = element;
           this.state.quantity.find(qty => {
             if(repeatedItem.id === qty.id){
               const qState = this.state.quantity
               console.log(qState)
               const qtyIndex = qState.indexOf(qty)
               console.log(qState[qtyIndex].value)
               qState[qtyIndex].value++
               this.setState(qState)
             }

             return null

           })
           
         }
         return null
       })
       return null
     }
     this.setState({cartItem: this.state.cartItem.concat(item)})
     //console.log(item)
     //console.log(this.state.ca); 
    // console.log(this.Pop)
     
     
    this.Pop()
   }

   
   handleRemove =  (item) => {
     const cartItem = this.state.cartItem.filter(c => c !== item);
     this.setState({cartItem: cartItem});
     console.log('Remove was called ' + item.id);
   }

   handleClearCart =() => {
     //const cartItem = this.state.cartItem
     this.setState({cartItem: []})
     console.log(this.state.cartItem)
     console.log('clear cart was called');
     const defaultQty = this.state.quantity.map(c => c.value = 1);
     this.setState(defaultQty)
   }

   getSum = (total, num) => {
     return total + num
   }

   showSideBar = () => {
    this.setState({sideBar: true})
    console.log('sidebar was called ' + this.state.sideBar)
   }

   closeSideBar = () => {
    this.setState({sideBar: false})
    console.log('sidebar was called ' + this.state.sideBar)
   }

  Pop = () => {
    this.setState({isOpen: true});
    setTimeout(() => this.setState({isOpen: false}), 2500);
  }

  handleQuantityIncrement = (q) => {
    const quanty = this.state.quantity;
    const index = quanty.indexOf(q);
    quanty[index].value++;
    this.setState(quanty)
  }

  handleQuantityDecrement = (q) => {
    const quanty = this.state.quantity;
    const index = quanty.indexOf(q);
    if(quanty[index].value === 1){
      return null
    }
    quanty[index].value--;
    this.setState(quanty)
    
  }

  


  render() { 
    const totalAmount = () => {
     const total = this.state.cartItem.map(c => {
      const inter = this.state.quantity
      for(let interObj of inter){
        for(var interKey in interObj){
          if(interKey === 'id' && interObj[interKey] === c.id){
            const mult = c.price * interObj.value
            console.log(mult)
            return mult
          }
          
        }
      }
         
          
      
       return 0
     })
     console.log(total)
      const pre = total.reduce(this.getSum, 0);
      const final = pre.toFixed(2);
      //console.log('here ' + total)
      console.log('final ' + final);

      return final
      
    }

   // this.handleCartQuantity()
    //totalAmount()
    return ( 
    
        <>

          
          <Router>
          <Navbar onShowSideBar={this.showSideBar}/>

          <Modal open={this.state.isOpen}>This Item has been added to your Cart, Check the top left corner</Modal>

            <Switch>
              <Route path='/'/>
            </Switch>

          <Cart key={this.state.cartItem.id} item={this.state.cartItem} sideBar={this.state.sideBar} onCloseSideBar={this.closeSideBar} onRemove={this.handleRemove} onClearCart={this.handleClearCart} totalPrice={totalAmount()} onCartQtyIncrement={this.handleQuantityIncrement} onCartQtyDecrement={this.handleQuantityDecrement} quanty={this.handleCartQuantity} quantityState={this.state.quantity}/>

          <Products key={this.state.Productlist.id} product={this.state.Productlist} onAddToCart={this.handleAddToCart}  quant={this.state.quantity} onQtyIncrement={this.handleQuantityIncrement} onQtyDecrement={this.handleQuantityDecrement}/>

          </Router>  
        </>
  
     );
  }
}
 
export default App;
