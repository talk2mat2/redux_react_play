import React from "react";
import styled from "styled-components";
import {connect} from 'react-redux'

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

const Cartdropdown = ({display,item}) => {
  
  return (
    <Styledcart display={`${display}`}>
        <h3>Shopppng Cart</h3><ol>
     { item.map(value=><li><Cartitem item={value}/></li>)}
     </ol>
    </Styledcart>
  );
};

const mapStateToProps=(state)=>({
display:state.cart.display,
item:state.cart.items
})

export default  connect(mapStateToProps)(Cartdropdown);
