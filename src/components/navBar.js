import React from 'react';
import {Link} from 'react-router-dom'
import LexisLogo from '../Lexis.png'

const NavBar = () =>{
    return (
        <nav>
          <div class="nav-wrapper grey darken-4">
            <a href="#" class="brand-logo center" style={{ marginLeft: "10px", marginRight: "10px" }}><b>Lexis</b><img src={LexisLogo} height="42" width="40" style={{ marginRight: "10px", marginTop: "2px" }}></img></a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
              <li><Link to="/">View All Words</Link></li>
              <li><Link to="/word_count">Revise Words</Link></li>
              <li><Link to="/create_word_form">Add a New Word</Link></li>
            </ul>
          </div>
        </nav>
    )
}

export default NavBar;