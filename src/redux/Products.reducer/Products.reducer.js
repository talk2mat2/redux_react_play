import {Products} from './Products'
const INITIAL_STATE=Products

export const productsReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case('add_products'):
        return({...state});
        
        default:
            return state
    }

}
