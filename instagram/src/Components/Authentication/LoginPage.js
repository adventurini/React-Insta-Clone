import React from 'react';
import './LoginPage.css';
import igLogo from './ig_logo.svg';
import {LoginPageSection} from '../../StyledComponents'


import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';

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
            <LoginPageSection>
            <Container className='loginInput'>
            <img className='logo' src={igLogo} alt='Instagram Logo'></img>
            <h2>Sign in</h2>
                <Form onSubmit={this.signIn}>
                
                <FormGroup>
                    <Label>Username</Label>
                <Input 
                type='text'
                onChange={this.handleChange}
                value={this.state.inputText}
                placeholder="username"
                ></Input>
                </FormGroup>
                
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                size="medium"
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          
          <Button color='info'>Submit</Button>
                </Form>
            </Container>
            </LoginPageSection>
        )
    }
}

export default LoginPage