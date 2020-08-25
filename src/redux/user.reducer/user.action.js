import {set_current_user} from './user.action.types'
export const setcurrentUser=(user)=>({
type:set_current_user,
payload:user
})