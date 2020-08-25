import React from 'react';
import {connect} from 'react-redux'
import Carticon from '../cart.components/cart.components'
import Cartdropdown from '../cart.dropdown/cart.dropdown'

const Navbar = ({currentUser}) => {
  console.log(currentUser)
 
    return ( <nav style={{color:"black",backgroundColor:"cyan",width:'100vw',height:"150px"}}>
        <p >simple nav<br/>
        currentUser={currentUser} 
    
    </p>
    <Carticon />
   <Cartdropdown />
    </nav> );
}
 
const mapStateToProps=state=>({
    currentUser:state.user.currentUser,
   

})





export default connect(mapStateToProps)(Navbar);