import React from 'react';

class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputText:''
        }
    }

    handleChange= e => this.setState({
        inputText : e.target.value
    })

    signIn= (event)=>{
        event.preventDefault();
        localStorage.setItem('username', this.state.inputText);
        window.location.reload();
    }

    render(){
        return(
            <div className='loginInput'>
                <form onSubmit={this.signIn}>
                <input 
                onChange={this.handleChange}
                value={this.state.inputText}
                placeholder="sign in"
                ></input>
                </form>
            </div>
        )
    }
}

export default LoginPage