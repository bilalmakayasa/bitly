import {combineReducers} from 'redux'
import short from './reducer/guestReducer'
import registry from './reducer/registryReducer'
import signing from './reducer/SigningReducer'
import shortUser from './reducer/ShortUserReducer'

const rootReducer = combineReducers({
    short,
    registry,
    signing,
    shortUser
})

export default rootReducer