import {createStore,applyMiddleware} from 'redux'
import {logger} from 'redux-logger'

import {rootReducer } from './root.reducer'
const middleware= [logger]

export const Store= createStore(rootReducer,applyMiddleware(...middleware))