import React from 'react'
import '../styles/Login.scss'
export default class Login extends React.Component{
    state = {
        username: '',
        password: ''
    };
    handleClickButton = () => {
        alert('back to home')
    }
    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        }
        )
    }
    handlePassword = (event) => {
        this.setState({
            password : event.target.value
        }            
        )
    }
    handleClickRegister = () => {
        alert('do not update')
    }
    handleClickLogin = () => {
        alert(this.state.username + ', Wellcome to PC-eco!')
    }
    render(){
        return(
            <form className="Login">     
                <button onClick={()=> this.handleClickButton}>Back to Home</button>
                    <div className="LoginInner">
                    <h1>Login</h1>
                    <p>Sign in to your account</p>
                    <input type="text" placeholder='Username' onChange={(event) => {this.handleUsername(event)}}/><br/>
                    <input type="password" placeholder='Password' onChange={(event) => {this.handlePassword(event)}}/><br/>
                    <button onClick={()=> this.handleClickLogin}>Login</button>
                    <p>You forgot your password. Click here to reset</p>
                    <button onClick={()=> this.handleClickRegister}>Register</button>
                </div>  
            </form>
        
        )
    }
}