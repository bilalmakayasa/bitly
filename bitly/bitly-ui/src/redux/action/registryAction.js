import * as type from '../../type';
import api from '../../libs/axios';
import registryReducer from '../reducer/registryReducer'

export const onPostRegister= () => async (dispatch, getState) =>{
    
    try {
       const data = await api.post('/register',{
           email:getState().registry.email, 
           password:getState().registry.password
        })
       console.log(data)
    } catch (error) {
        console.log(error)
    }
} 

export const onPostHandleInput = ({name, value}) => {
    return { 
        type: type.POST_USER_DATA_INPUT,
        name,
        value,
    }
}

const onPostError = (error) => ({
    type: type.USER_DATA_ERROR,
    error
})