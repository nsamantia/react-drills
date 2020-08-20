import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super()
        this.state={
            username: '',
            password: ''
        }

    }

    handleUsernameChange(name) {
        this.setState({username: name})
    }

    handlePasswordChange(pass) {
        this.setState({password: pass})
    }





    render(){
        return(
            
            <div>
                <form>
                    <input onChange={e => this.handleUsernameChange()} placeholder='Username'/>
                    <input onChange={e => this.handleUsernameChange()} placeholder='Password' />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login

