import React from 'react';
import {connect} from 'react-redux';
import {onPostHandleSigning, onPostSigning} from '../redux/action/SIgningAction';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router'


const signing = ({email, password, onPostHandleSigning,onPostSigning, token}) => {
    console.log(token)
    if(token){
        return <Redirect to= '/shortUser'/>
    }
    
    return (
        <div> 
           <input 
           type ='text'
           name="email"
           value={email}
           onChange = {({target:{name,value}})=>onPostHandleSigning({name, value})}
           />
           <input 
           type ='password'
           name="password"
           value={password}
           onChange = {({target:{name,value}})=>onPostHandleSigning({name, value})}
           />

           <button onClick = {()=> onPostSigning()}>SIGN IN</button>
            
           
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        email : state.signing.email,
        password: state.signing.password,
        token: state.signing.token
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onPostHandleSigning, onPostSigning
}, dispatch)
const withRedux = connect(mapStateToProps,mapDispatchToProps)(signing)
export default withRouter(withRedux)
//parameter 