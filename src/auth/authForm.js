import { useState } from "react"
import LogInForm from "./logInForm"
import SingUpForm from "./signUpForm"
import "../styles/auth.css"
import { NavLink } from "react-router-dom"

export default function AuthForm(){
  const [active, setActive]=useState(false)

  return(
    <div className="auth-form">
      <div className="d-flex justify-content-between align-items-center">
        {active ? <button className="btn btn-primary" onClick={()=> setActive(!active)}>Регистрация</button>:<button className="btn btn-primary" onClick={()=> setActive(!active)}>Авторизация</button>}
        <NavLink to={"/"}><button type="button" className="btn-close" /></NavLink>
      </div>
      
      {active ? <LogInForm/>: <SingUpForm/>}
      
    </div>
    
  )
}