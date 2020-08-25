import React from 'react';
import {connect} from 'react-redux'
import {toggleCart} from '../../redux/cart.reducer/cart.actions'
import {carttotal} from '../../redux/cart.reducer/cart.selector'

const Carticon = ({toggleitem,cartTotal,totalPrice}) => {

const handleClick=()=>{
toggleitem()
}

    return ( 
    <div className="navbar-class"><button onClick={handleClick}>cart:  {cartTotal} total: ${totalPrice}</button></div>
     );
}
 const mapDispatchToProps=dispatch=>({
     toggleitem:()=>dispatch(toggleCart())
 })

 const mapStateToProps=state=>({
     cartTotal:state.cart.items.reduce(((a,b)=>a+b.quantity),0),
     totalPrice:carttotal(state)
 })

export default connect(mapStateToProps,mapDispatchToProps)(Carticon);