import React, { Component } from 'react' 
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'



class MainPage extends Component {
    render() {
        return (

            <HeaderContainer className="header-container">
                
              {/* Header Content */}
            <div className="header-content">
              <Title>RNS Solutions Task</Title>
              <Link to ="/login">
                <Button to ="/login" className="main-offer-btn" primary>  Sign In  </Button>              
              </Link>
            </div>

            </HeaderContainer>
        );
    } 
}

export default MainPage;

// Header Container 
const HeaderContainer = styled.header`

//Header Content
.header-content {
    width: 65%;
    height: 70%;
    position: relative;
    margin: 0 auto 0;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    z-index: 2;

`;

// Main Title 
const Title = styled.h1`
    margin: 9rem 0 1.2rem ;
    font-size: 5rem;
    font-weight: 700;
    line-weight: 1.1em;
    color: #fff;
`;

const Button = styled.button`
    display: inline-block;
    background: var(--main-red);
    text-transform: uppercase;
    border: none;
    outline: none;
    margin: 0 33% ;
    padding: 1.5rem;
    border-radius: 0.1875rem ;
    font-size: 2rem;
    text-align: center ;
    box-shadow: 0 1px 0 rgba(0, 0,0,0.45) ;
    transition: backgroung 0.2s ease-in ;
    cursor: pointer ;
    color: white ;
`;