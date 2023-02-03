import React from "react";
import { Link, NavLink} from 'react-router-dom';
const Header =() =>{
return(
<nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark
bg-dark">
  <div className="container-fluid">
  <Link className="navar-brand" to={'/'}> Reforzamiento</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <NavLink to={'/'}   className={ ({isActive})=>`nav-link ${isActive ? 'active' : ''}` }>
            Home
        </NavLink>
        <NavLink to={'/typescript'}   className={ ({isActive})=>`nav-link ${isActive ? 'active' : ''}` }>
        typescript
        </NavLink>
        <NavLink to={'/hooks'}   className={ ({isActive})=>`nav-link ${isActive ? 'active' : ''}` }>
        hooks
        </NavLink>
        <NavLink to={'/default'}   className={ ({isActive})=>`nav-link ${isActive ? 'active' : ''}` }>
        default
        </NavLink>
      </ul>
    </div>
  </div>
</nav>
)
}


export default Header