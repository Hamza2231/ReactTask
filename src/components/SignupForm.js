import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Redirect } from "react-router-dom";


const regExp = RegExp(
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  );
  
  const initState = {
    checked: true,
    email: '',
    password: '',
    confirmpassword: '',
    emailError: '',
    passwordError: '',
    confirmpasswordError: ''
  };
  
  class SignupForm extends Component {

    constructor(props){
      super();
    let Registration = false;
    }

    state = initState;
  
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

    handleConfirmPasswordChange = e => {
      this.setState({
        confirmpassword: e.target.value
      });
    };
  
    // Validate
    validate = () => {
      let inputError = false;
      
      const errors = {
        emailError: '',
        passwordError: '',
        confirmpasswordError: ''
      };

      /*
    componentWillMount(){
      this.getdata()
    }
    getData() {
      var xhr = new XMLHttpRequest()
      xhr.addEventListener('load', () => {
        console.log(xhr.responseText)
      })
     
      xhr.open('POST', 'https://localhost:3000/users')
      xhr.send()
    }
    */

      const success = {
        onSuccess: ''
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
          'Your password must contain atleast 4 characters.';
      }
      
      if (this.state.confirmpassword != this.state.password) {
        inputError = true;
        errors.confirmpasswordError =
          'Your password do not match';
      }
      
      if (this.state.confirmpassword === this.state.password) {
        inputError = false;
        success.onSuccess =
          'Successfully Sign Up';
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
        this.setState ({Registration: true})
      }
    };
  
    render() {
      if(this.state.Registration){
        return <Redirect to="/login"/>
      }
      return (
                <FormContainer>
                    <div className="form-container">
                        <form>
                        <h1>Sign Up for Free</h1>
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
                            <input
                            type="password"
                            className={
                                this.state.passwordError
                                ? 'input-empty input-error'
                                : 'input-empty'
                            }
                            required
                            onChange={this.handleConfirmPasswordChange}
                            value={this.state.confirmpassword}
                            />
                            <label>Confirm Password</label>
                            <span style={{ color: '#db7302' }}>
                            {this.state.confirmpasswordError}
                            </span>
                        </div>

                        <div className="input-container">
                            <Button type="submit" onClick={e => this.onSubmit(e)}>
                            Sign UP
                            </Button>
                        </div>    
                                                                                                          
                    </form>
                </div>
            </FormContainer>
        )
    }
}

export default SignupForm;

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
