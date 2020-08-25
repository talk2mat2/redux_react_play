import React from "react";
import styled from "styled-components";
import {connect} from 'react-redux'
import {cartItemselector} from '../../redux/cart.reducer/cart.selector'
import {carttotal} from '../../redux/cart.reducer/cart.selector'

import Cartitem from '../cartitems/cart.items.components'

const Styledcart = styled.div`
  background-color: white;
  width: 300px;
  height: 200px;
  overflow: scroll;
  position: absolute;
  z-index: 4;
  padding: 2px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  flex-direction:column;
  text-align: center;
  display:${({display})=>display==='true'?`flex`:`none`}

  
`;

const Cartdropdown = ({display,item,total}) => {
    
  return (
      
    <Styledcart display={`${display}`}>
        <h4>Shopppng Cart</h4><ol>
     { item.map(value=><li key={value.title}><Cartitem item={value}/></li>)}
     </ol>
  <p>total: ${total}</p>
    </Styledcart>
  );
};

const mapStateToProps=(state)=>({
display:state.cart.display,
item:cartItemselector(state),
total:carttotal(state)
})



export default  connect(mapStateToProps)(Cartdropdown);
