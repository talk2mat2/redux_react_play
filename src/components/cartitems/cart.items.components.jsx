import React from 'react'

const Cartitem=({item:{title,price,quantity},number})=>{
    return (<div style={{backgroundColor:'white',color:'black',margin:'3px',borderRadius:'5px'}}>
<p>{title}</p>
<small>quantity:{quantity}</small> <br/>
    <small>price:{quantity} x ${price}</small>
    <div style={{height:'2px',backgroundColor:'black',width:'100vw'}}></div>
    </div>)
}

export default Cartitem