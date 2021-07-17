import React from 'react';
import { Link } from 'react-router-dom'
import LexisLogo from '../Lexis.png'
import M from 'materialize-css';

class NavBar extends React.Component {

  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
  }

  close = () => {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.getInstance(elem);
    instance.close();
  }

  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper grey darken-4">
            <a href="#" class="brand-logo center" style={{ marginLeft: "10px", marginRight: "10px" }}><b>Lexis</b><img src={LexisLogo} height="42" width="40" style={{ marginRight: "10px", marginTop: "2px" }}></img></a>
            <ul id="nav-mobile">
              <li data-target="slide-out" className="sidenav-trigger">
                  <i className="material-icons" style={{color: "white", cursor: "pointer"}}>menu</i>
              </li>
              <div className="left hide-on-med-and-down">
              <li><Link to="/">View All Words</Link></li>
              <li><Link to="/word_count">Revise Words</Link></li>
              <li><Link to="/create_word_form">Add a New Word</Link></li>
              </div>
            </ul>
          </div>
        </nav>
        <ul class="sidenav #e0e0e0" id="slide-out" ref={(sidenav) => this.sidenav = sidenav}>
          <li onClick={this.close}><Link to="/">View All Words</Link></li>
          <li onClick={this.close}><Link to="/word_count">Revise Words</Link></li>
          <li onClick={this.close}><Link to="/create_word_form">Add a New Word</Link></li>
        </ul>
      </div>
    )
  }
}

export default NavBar;