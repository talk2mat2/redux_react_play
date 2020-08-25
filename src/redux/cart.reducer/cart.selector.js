import {createSelector} from 'reselect'

const selectcart=state=>state.cart.items

export const cartItemselector=createSelector([selectcart],cart=>cart)

export const  carttotal =createSelector([selectcart],cart=>cart.reduce(((a,b)=>a+(b.quantity*b.price)),0))