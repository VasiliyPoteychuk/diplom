import { useState } from "react";
import { useDispatch } from "react-redux";
import productsAPI from "../api/productsAPI";
import { addUser } from "../store/usersSlice";

export default function SingUpForm(){
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  function registerSubmit(e) {
    e.preventDefault();
    productsAPI.register({firstName, email, password})
        .then(res => {
          dispatch(addUser(res.data))
        })
}

  return(
    <div className=''> 
    <form className='' onSubmit={registerSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Имя</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          className="form-control"
          id="name"
          name='name'
          placeholder="Имя"/>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          id="email"
          name='email'
          placeholder="Email"/>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Пароль</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          className="form-control"
          id="password"
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