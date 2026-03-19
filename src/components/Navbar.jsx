import { Link, Route, Routes } from "react-router";
import './Navbar.css'
export function Navbar(){
return(  
   <div className="header">
  <div className="logo" to={'/about'}>
    <Link className="link"><h2>Logo</h2></Link>
   </div>
  <div>
    <ul>
        <li>
             <Link className="link" to="/">Home</Link>
        </li>
         <li>
             <Link className="link" to="/about">About</Link>
        </li>
         <li>
             <Link className="link" to="/login">Login</Link>
        </li>
            <li>
             <Link className="link" to="/college">College</Link>
        </li>
    </ul>
   </div>
    </div>
)
}