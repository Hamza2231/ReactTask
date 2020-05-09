import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Redirect } from "react-router-dom";
//import { useHistory } from "react-router-dom";


const regExp = RegExp(
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  );
  
  const initState = {
    checked: true,
    email: '',
    password: '',
    emailError: '',
    passwordError: ''
  };

  //const RedirectUrl = {} ;
  //const state = {redirect: null};
  //let history = useHistory();


  class LoginForm extends Component {

    constructor(props){
      super();
    let LoggedIn = false;
    }
    state = initState;
  
    /*
    componentWillMount(){
      this.getdata()
    }
    getData() {
      var xhr = new XMLHttpRequest()
      xhr.addEventListener('load', () => {
        console.log(xhr.responseText)
      })
     
      xhr.open('POST', 'https://localhost:3000/users/information')
      xhr.send()
    }
    */
    handleEmailChange = e => {
      this.setState({
        email: e.target.value
      });
    };
  
    handlePasswordChange = e => {
      this.setState({
        password: e.target.value
      });
    };
  
    // Validate
    validate = () => {
      let inputError = false;
      const errors = {
        emailError: '',
        passwordError: ''
      };
  
      if (!this.state.email) {
        inputError = true;
        errors.emailError = 'Please enter a valid email or phone number.';
      } else if (!this.state.email.match(regExp)) {
        inputError = true;
        errors.emailError = (
          <span style={{ color: 'red' }}>Your Email address must be valid</span>
        );
      }
  
      if (this.state.password.length < 4) {
        inputError = true;
        errors.passwordError =
          'Your password must contain between 4 and 60 characters.';
      }
  
      this.setState({
        ...errors
      });
  
      return inputError;
    };
  
    onSubmit = e => {
      e.preventDefault();
      const err = this.validate();
      if (!err) {
       // this.setState({redirect: '/dashboard'});
       //this.setState(RedirectUrl);
       this.setState ({LoggedIn: true})
       
      }
    };
  
    // Checkbox
    handlerCheckbox = e => {
      this.setState({
        chekcked: e.target.checked
      });
    };
  
    render() {
      if(this.state.LoggedIn){
        return <Redirect to="/dashboard"/>
      }
      return (
                <FormContainer>
                    <div className="form-container">
                        <form>
                        <h1>Sign In</h1>
                        <div className="input-container">
                            <input
                            type="email"
                            className={
                                this.state.emailError
                                ? 'input-empty input-error'
                                : 'input-empty'
                            }
                            required
                            onChange={this.handleEmailChange}
                            value={this.state.email}
                            />
                            <label>Email or Phone number</label>
                            <span style={{ color: '#db7302' }}>{this.state.emailError}</span>
                        </div>
                        <div className="input-container">
                            <input
                            type="password"
                            className={
                                this.state.passwordError
                                ? 'input-empty input-error'
                                : 'input-empty'
                            }
                            required
                            onChange={this.handlePasswordChange}
                            value={this.state.password}
                            />
                            <label>Password</label>
                            <span style={{ color: '#db7302' }}>
                            {this.state.passwordError}
                            </span>
                        </div>
                        <div className="input-container">
                          <Link to = '/dashboard' >
                            <Button type="submit" onClick={e => this.onSubmit(e)} >
                            Sign In
                            </Button>
                            </Link>
                        </div>
            
                        <label className="checkbox-container">
                            Remember me
                            <input
                            type="checkbox"
                            defaultChecked={this.state.checked}
                            onChange={this.handlerCheckbox}
                            />
                            <span className="checkmark"></span>
                        </label>                                               
                            <Link to= "/signup" className = "sign-up-text">
                            Sign Up Now
                            </Link>                       
                    </form>
                </div>
            </FormContainer>
        )
    }
}

export default LoginForm;

//Form Container 
const FormContainer = styled.div`
    display: grid;
    justify-content: center;
    position: relative ;
    z-index: 5;

    .form-container {
        background: rgba(0, 0, 0, 0.8);
        positon: relative ;
        width: 28.125rem;
        height: 41.25rem ;
        padding: 4rem;
    }

    .input-container{
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 1.2rem;
    }

    .input-empty {
        color: #fff;
        background: #333;
        border: 0 ;
        border-radius: 0.25rem;
        height: 3rem;
        padding: 0.9rem 1.25rem 0;   
    }

    form div label {
        position : absolute;
        top: 0.625rem;
        left: 1.25rem;
        pointer-events: none ;
        color: #8a8a8a;
        font-size: 1rem;
        transition: transform 150ms ease-out, font-size 150ms ease-out;
    }

    form div {
        position: relative;
    }

    input:focus ~ label {
        top: 0.4375rem;
        font-size: 0.7rem;
    }

    input:focus {
        outline: none ;
    }

    .input-error {
        border-bottom: 1px solid #db7302
    }

    .checkbox-container {
        margin-left: 0.75rem;
        padding-left: 1.875rem;
        position: relative;
        font-size: 0.9rem;
        color: #999;
        cursor: pointer;
    }
    
    .checkbox-container input {
        display : none ;
    }

    .checkbox-container .checkmark {
        display: inline-block;
        background: #454545 ;
        width: 1.1rem; 
        height: 1.1rem;
        left: 0;
        right: 0;
        border-radius: 0.1rem;
        position: absolute;
    }

    .checkbox-container input:checked + .checkmark:after {
        content: '';
        position: absolute;
        height: 0.25rem ;
        width: 0.625rem ;
        border-left: 2px solid #000;
        border-bottom: 2px solid #000;
        top: 25%;
        left: 21%;
        transform: rotate(-45deg);
    }

      .sign-up-text {
        margin: 2rem ;
        font-size: 1.1rem;
        color: #fff;
        &:hover {
            text-decoration: underline;
          }
      }
`;

// Button 
const Button = styled.button`
    color: #fff ;
    background: rgba(229, 9 , 20);
    border: none; 
    outline: none;
    padding: 0.8rem 1.3rem;
    border-radius: 0.125rem;
    font-size: 1rem;
    text-align: center;
    box-shadow: 0 1px 0 rgba (0, 0, 0, 0.45);
    transition: opacity 0.2s ease-in; 
    cursor: pointer ;
    text-decoration: none ;
    margin: 1rem 0 ;

`;
