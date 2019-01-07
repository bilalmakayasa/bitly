import * as type from '../../type'
const initialState = {
    id:"",
    email:"",
    password:""
}
const short = (state=initialState, action = {}) =>{
    switch (action.type) {
        case type.POST_USER_DATA_INPUT:
        return {
                ... state,
                [action.name]: action.value
        }
        
    }
}