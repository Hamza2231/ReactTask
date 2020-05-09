import React from 'react';
import './css/App.css';
import { Switch, Route } from 'react-router-dom';
import Main from './pages';
import Login from './pages/Login'
import Signup from './pages/Signup';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Switch>
      <Route exact path = "/" component = {Main} />
      <Route path = "/login" component = {Login} />
      <Route path = "/signup" component = {Signup} />
      
      <Route path = "/dashboard" component = {Dashboard} />         //checking 
    </Switch>
  );
}

export default App;
