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
        <ul class="sidenav" id="slide-out" ref={(sidenav) => this.sidenav = sidenav} style={{backgroundColor:"#151515"}}>
          <li><i class="material-icons" style={{marginTop:"25px",marginLeft:"5px",fontSize:"20x"}} onClick={this.close}>close</i></li>
          <li><span style={{color:"#ffffff",fontWeight:"bold",fontSize:"22px",marginLeft:"20px",textDecoration:"underline"}}>ACTIONS</span></li>
          <li onClick={this.close}><Link to="/"><span style={{color:"#f50057",fontWeight:"bold",fontSize:"16px"}}>View All Words<i class="material-icons" style={{paddingLeft:"5px"}}>remove_red_eye</i></span></Link></li>
          <li onClick={this.close}><Link to="/word_count"><span style={{color:"#f50057",fontWeight:"bold",fontSize:"16px"}}>Revise Words<i class="material-icons" style={{paddingLeft:"5px"}}>loop</i></span></Link></li>
          <li onClick={this.close}><Link to="/create_word_form"><span style={{color:"#f50057",fontWeight:"bold",fontSize:"16px"}}>Add a New Word<i class="material-icons" style={{paddingLeft:"5px"}}>add_circle</i></span></Link></li>
        </ul>
      </div>
    )
  }
}

export default NavBar;