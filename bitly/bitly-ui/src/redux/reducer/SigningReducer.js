import * as type from '../../type'
const initialState = {
    id:"",
    email:"",
    password:"",
    token:""
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case type.POST_USER_DATA:
        return{
            ...state,
            [action.name]: action.value
    };
        case type.USER_DATA_ERROR:
            return{
                ...state,
                error: action.error
            }
        default:
            return state
    }
}