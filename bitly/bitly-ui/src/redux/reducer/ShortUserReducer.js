import * as type from '../../type'
const initialState = {
    id:"",
    short_url:"",
    url:"",
    data:[]

}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case type.POST_SHORT_DATA:
        return{
            ...state,
            [action.name]: action.value
    };
        case type.USER_DATA_ERROR:
            return{
                ...state,
                error: action.error
            }
            case type.GET_SHORT_DATA:
            return{
                ...state,
                data: action.data
            }
        default:
            return state
    }
}
