import{add_Items,toggle_cart} from './cart.action.type'
export const toggleCart=()=>({type:toggle_cart})
export const addItems=(items)=>({
type:add_Items,
payload:items
})