import React from 'react';

const authenticate= App=> LoginPage=>
class extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            loggedin: false
        }
    }
    componentDidMount(){
        if(localStorage.getItem('username')){
            this.setState({
                loggedin: true
            })
        }
        else{
            this.setState({
                loggedin:false
            })
        }
    }
    render(){
        if(this.state.loggedin){
            return <App />
        }
        else{
            return <LoginPage />
        }
        
    }
}

export default authenticate

