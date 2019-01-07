import * as type from '../../type';
import api from '../../libs/axios';


export const onPostGuestURL = () => async (dispatch, getState) =>{
    console.log(getState())
    try {
       const {data :{short_url, url}} = await api.post('/',{url:getState().short.url})
       const meta = await api.post('/',{url:getState().short.url})
        console.log(meta)

       dispatch(onPostHandleInput({name:'short_url', value: meta.request.responseURL + short_url}))
    } catch (error) {
        console.log(error)
    }
  
} 
export const onPostHandleInput = ({name, value}) => {
    return { 
        type: type.POST_USER_DATA_INPUT,
        name,
        value: value,
    }
}


const onPostError = (error) => ({
    type: type.USER_DATA_ERROR,
    error
})