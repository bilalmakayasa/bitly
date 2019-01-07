import {combineReducers} from 'redux'
import userList from './reducer/userList'

const rootReducer = combineReducers({
    userList
})

export default rootReducer