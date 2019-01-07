import * as type from '../../type'
const initialState = {
    id:"",
    email:"",
    password:""
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case type.POST_USER_DATA_INPUT:
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