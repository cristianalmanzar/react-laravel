import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';


class Master extends Component {
  render(){
    return (
      <div className="container">
          <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item active">
                <a className="nav-link" >CRUD REACT-LARAVEL</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" ><Link to="/">Inicio</Link></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" ><Link to="add-contact">Añadir Contacto</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link "><Link to="show-contact">Contactos</Link></a>
                </li>
            </ul>
          </nav>
        
          <div>
              {this.props.children}
          </div>
      </div>
    )
  }
}
export default Master;