import { NavLink } from "react-router-dom";
import backLogo from '../icons/back.png';

export default function BackButton(){
  return(
    <NavLink to={'/'}><img src={backLogo} className='position-absolute mt-5 ms-5' style={{width:100+'px'}}/></NavLink>

  )
}