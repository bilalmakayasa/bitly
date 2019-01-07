import React from 'react';
import {connect} from 'react-redux';
import {onPostHandleShort, onPostUserShort, onShowTable, onUserLogout} from '../redux/action/ShortUserAction';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router'

class ShortUrl extends React.Component {
    

    componentDidMount(){
        this.props.onShowTable()
    }
    render() {
        const {onPostHandleShort, onPostUserShort, short_url, url, data, onUserLogout} = this.props
       if(!this.props.token){
        return <Redirect to ='/signing'/>
       }
        return (
            <div> 
                <h1>welcome</h1>
               <input 
               type ='text'
               name="url"
               placeholder="type your URL"
               value={url}
               onChange = {
                   ({target:{name,value}})=>onPostHandleShort({name, value})
                }
               />
               <input 
               type ='text'
               name="short_url"
               value={short_url}
               placeholder="type your short URL"
               onChange = {
                   ({target:{name,value}})=>onPostHandleShort({name, value})
                }
               />
               <button onClick = {()=> onPostUserShort()}>create Short URL</button>
               <button onClick = {()=> onUserLogout()}>Log Out</button>
            
             
         
                 <div>
                 {data.map(item=>(<div key={item.id}>
                 {item.short_url}
                 {item.url}
                 {}</div>))}
                 </div>
               
            </div>
        )
    }
        
        
    
}

const mapStateToProps = (state) =>{
    return {
        short_url : state.shortUser.short_url,
        url: state.shortUser.url,
        data: state.shortUser.data,
        token: state.signing.token
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onPostHandleShort, onPostUserShort, onShowTable, onUserLogout
}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(ShortUrl)