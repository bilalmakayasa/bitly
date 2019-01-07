import React from 'react';
import {connect} from 'react-redux';
import {onPostHandleInput, onPostGuestURL} from '../redux/action/guestAction';
import { bindActionCreators } from '../../../../../../../Library/Caches/typescript/3.1/node_modules/redux';

const ShortUrl = ({url, short_url, onPostHandleInput,onPostGuestURL}) => {
    return (
        <div> 
           <input 
           type ='text'
           name="url"
           value={url}
           onChange = {({target:{name,value}})=>onPostHandleInput({name, value})}
           />

           <button onClick = {()=> onPostGuestURL()}>create your Short URL here</button>
           <p>copy this link</p>
           <li>
           <input
            type= 'text'
            value={short_url}
            />
           </li>
           
           
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        short_url : state.short.short_url,
        url: state.short.url
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onPostHandleInput, onPostGuestURL
}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(ShortUrl)
//parameter 