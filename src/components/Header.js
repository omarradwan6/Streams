import React from 'react'
import {Link} from 'react-router-dom'
import GoogleAuth from './GoogleAuth'


const Header=()=>{


	return (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">Streams</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  	<div className="collapse navbar-collapse" id="navbarSupportedContent">
    	<ul className="navbar-nav mr-auto">
      		<li className="nav-item active">
       		<Link className="nav-link" to="/">Home</Link>
     		 </li>
      	</ul>
     </div>

    <div className="navbar-nav">
      <GoogleAuth/>
     </div>

   </nav>
		);
}


export default Header