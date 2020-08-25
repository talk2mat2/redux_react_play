import {toggle_cart,add_Items }from './cart.action.type'
import {filterCatItem} from './cart.utils'
const INITIAL_STATE={display:false,items:[]}
export const cartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case toggle_cart:
        return ({...state,display:!state.display})
        case add_Items :
            return {...state,items:filterCatItem(state.items,action.payload)}
        default:
            return state
    }
}