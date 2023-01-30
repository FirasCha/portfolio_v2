import React, { Component } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import './login.css';
import { useNavigate } from "react-router-dom";
import Home from '../home/Home';
// import profile from '../../assets/a.png'
// import email from '../../assets/email.jpg'
// import pass from '../../assets/pass.png'

class Login extends Component  {
 
  handleSubmit = e => {
    const nav = useNavigate();
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Name is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      
      e.target.email.value === "admin" &&
      e.target.password.value === "admin"
    ) {
      nav('/');
      // alert("Successfully logged in");
      // e.target.email.value = "";
      // e.target.password.value = "";
       
    } else {
      alert("Wrong name or password combination");
    }
  };

  handleClick = e => {
    e.preventDefault();
  };
  
  render(){
  return (
    <div className="App">
        {/* <img className="logo" /> */}
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Name</label>
            <input type="text" name="email" placeholder="Name" required/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" required/>
          </div>
          <button className="primary">Login</button>
        </form>
        
          <button className="secondary" onClick={this.handleClick}>
            Create an account
          </button>
        
        
    </div>
  );
}
}

export default Login