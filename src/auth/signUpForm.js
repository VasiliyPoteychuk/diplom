import { useState } from "react";
import { useDispatch } from "react-redux";
import productsAPI from "../api/productsAPI";
import { addUser } from "../store/usersSlice";
import { useNavigate } from "react-router-dom";

export default function SingUpForm(){
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function registerSubmit(e) {
    e.preventDefault();
    productsAPI.register({firstName, email, password})
        .then(res => {
          if(!password || !email || !firstName){
            alert('нужно заполнить все поля')
          }else{
            dispatch(addUser(res.data));
            navigate('/');
          }
        })
}

  return(
    <div className=''> 
    <form className='' onSubmit={registerSubmit}>
      <div className="mb-3">
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          className="form-control"
          id="name"
          name='name'
          required
          placeholder="Имя"/>
          
      </div>
      <div className="mb-3">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          id="email"
          name='email'
          required
          placeholder="Email"/>
      </div>
      <div className="mb-3">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          className="form-control"
          id="password"
          required
          name='password'
          placeholder="Пароль"/>
      </div>
      <div className="mb-3">
          <input type="submit" className="btn btn-success" value='Зарегистрироваться'/>
      </div>
      
    </form>
  </div>
  )
};