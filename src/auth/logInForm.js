import { useState } from "react";
import { useDispatch} from "react-redux";
import { enterUser } from "../store/usersSlice";

export default function LogInForm(){
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  function logSubmit(e) {
    e.preventDefault();
    dispatch(enterUser({email, password}))
  }

  return(
    <div className=''>
      <form className='' onSubmit={logSubmit}>
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
          <input type="submit" className="btn btn-success" value='Авторизироваться'/>
        </div>
      </form>
    </div>
  )
};