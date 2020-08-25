import{ productsReducer} from './Products.reducer/Products.reducer'
import{userReducer} from './user.reducer/user.reducer'
import {combineReducers} from 'redux'
import {cartReducer} from './cart.reducer/cart.reducer'

export const rootReducer= combineReducers({Products:productsReducer,user:userReducer,cart:cartReducer})

