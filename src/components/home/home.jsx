import React, { useState } from "react";
import { setcurrentUser } from "../../redux/user.reducer/user.action";
import {addItems} from '../../redux/cart.reducer/cart.actions'
import './home.css'

import { connect } from "react-redux";

const Products = ({ Products, setcurrentUser, add_Items}) => {
  const [localstate, setLocalstate] = useState("");
  const listProducts = (Products) => {
    const Stock = Products.map((item) => (
     <div key={item.title}  className='home'>
        
        <h2>{item.title}</h2>
        <p>type: {item.type}</p>
        <small>price: ${item.price}</small><br/>
        <small>description:<br/> {item.description}</small><br/>
        <button id={item.title} onClick={handleItemClick}>ADD TO CART</button>
     
     </div>
    ));
    return Stock;
  };
  const handleChange = ({ target }) => {
    setLocalstate(target.value);
  };
  const handleClick = () => {
    setcurrentUser(localstate);
    setLocalstate("");
  };
  const handleItemClick=({target:{id}})=>{
const filteredItems=Products.filter(items=>items.title===id)
add_Items(...filteredItems)
  }
  return (
    <div>
      <input
        type="text"
        value={localstate}
        onChange={handleChange}
        placeholder="username"
      />
      <button onClick={handleClick}>setuser</button>
      {listProducts(Products)}
    </div>
  );
};
const mapstatetoprops = (state) => ({ Products: state.Products });

const mapDispatchToProps = (dispatch) => ({
  setcurrentUser: (user) => dispatch(setcurrentUser(user)),
  add_Items:(items)=>dispatch(addItems(items))
});

export default connect(mapstatetoprops, mapDispatchToProps)(Products);
