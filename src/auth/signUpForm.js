import { useState } from "react";
import { useDispatch } from "react-redux";
//import api from '../../api/products'
//import { saveToken } from '../../store/usersSlice';

export default function SingUpForm(){
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
 

  function registerSubmit(e) {
    e.preventDefault();
    // api.register({name, email, password})
    //     .then(res => {
    //         localStorage.clear();
    //         localStorage.setItem('token', res.data.access_token);
    //         dispatch(saveToken(res.data.user));
    //         setErrors([])
    //     })
    //     .catch(res => {
    //         setErrors(...Object.values(res.response.data.errors))
    //     })
}

  return(
    <div className=''> 
    <form className='' onSubmit={registerSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Имя</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
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
}