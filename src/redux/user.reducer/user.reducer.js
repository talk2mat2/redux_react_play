import {set_current_user} from './user.action.types'

const INITIAL_STATE = { currentUser:null };


export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case set_current_user:
      return { ...state, currentUser: action.payload };
    //   case"logout":
    //   return({...state,currentUser})
    default:
      return state;
  }
};
