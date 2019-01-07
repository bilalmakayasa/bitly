import * as type from '../../type';
import api from '../../libs/axios';



export const onPostSigning = () => async (dispatch, getState) =>{
    try {
       const data = await api.post('/signing',{
           email:getState().signing.email, 
           password:getState().signing.password
        })
        dispatch(onPostHandleSigning({
            name: 'token', 
            value: data.data.token
        }))
    } catch (error) {
        console.log(error)
    }
} 

export const onPostHandleSigning = ({name, value}) => {
    return { 
        type: type.POST_USER_DATA,
        name,
        value,
    }
}


const onPostError = (error) => ({
    type: type.USER_DATA_ERROR,
    error
})