import {react, Component } from "react";
import "./login.css"



class Login extends Component{
  render(){
    return(
      
      <form className="master_login">
        <h1 className="name">Login</h1>
        <div className = "form_control">
        <label >Email</label>
        <input type="name" placeholder ="Enter the email"/>
        </div>

        <div className= "form_control">
        <label>Password</label>
        <input type= "password" placeholder= "Enter the password" />
        </div>

        <div className = "button">
        <button  className ="signup" type= "button">sign-up</button>
        <button  className ="submit" type="submit">submit</button>
        </div>
        

      </form>
    )
  }
}

export default Login