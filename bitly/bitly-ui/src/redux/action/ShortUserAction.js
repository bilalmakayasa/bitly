import * as type from '../../type';
import api from '../../libs/axios';
import guestReducer from '../reducer/guestReducer'
import token, { onPostHandleSigning } from './SIgningAction'

export const onShowTable = () => async(dispatch,getState)=>{
    console.log(getState().signing.token)
    try {
        const {data} = await api.get('/short', { headers: { Authorization:'Bearer ' + getState().signing.token } })

    dispatch({
        type: type.GET_SHORT_DATA,
        data
    })
    console.log(data);
    } catch (error) {
        console.log(error)
    }
}
export const onUserLogout = () => (dispatch, getState) =>{

    dispatch(onLogoutUserHandling({
        name: 'token', 
        value: null
    }))
    // console.log(data);
    
}
export const onPostUserShort = () => async (dispatch,getState) =>{
    
    try {
       const {data} =  await api.post('/short',
        {
            url: getState().shortUser.url,
            short_url:getState().shortUser.short_url
        },{
            headers: { Authorization:'Bearer ' + getState().signing.token }
        }
        )

        
    } catch (error) {
        console.log(error)
    }
}
export const onPostHandleShort = ({name, value}) => {
    return { 
        type: type.POST_SHORT_DATA,
        name,
        value: value,
    }
}

export const onLogoutUserHandling = ({name,vaue}) =>{
    return{
        type: type.POST_USER_DATA,
        name,
        value: null
    }
}


const onPostError = (error) => ({
    type: type.USER_DATA_ERROR,
    error
})