import React from 'react';
import {connect} from 'react-redux';
import {onPostHandleInput, onPostGuestURL, onPostRegister} from '../redux/action/registryAction';
import { bindActionCreators } from '../../../../../../../Library/Caches/typescript/3.1/node_modules/redux';
import { Redirect } from 'react-router'

const register = ({email, password, onPostHandleInput,onPostRegister}) => {
    return (
       
        <div> 
            <p>please enter your E-mail and Password</p>
           <input 
           type ='text'
           name="email"
           placeholder='type your e-mail'
           value={email}
           onChange = {({target:{name,value}})=>onPostHandleInput({name, value})}
           />
           <input 
           type ='password'
           name="password"
           placeholder='type your password'
           value={password}
           onChange = {({target:{name,value}})=>onPostHandleInput({name, value})}
           />

           <button onClick = {()=> onPostRegister()}>SIGN UP</button>
           
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        email : state.short.email,
        password: state.short.password
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onPostHandleInput, onPostRegister
}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(register)
//parameter 