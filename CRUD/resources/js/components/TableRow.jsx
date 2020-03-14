import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';


class TableRow extends Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let uri = MyGlobleSetting.url + `/api/agenda/${this.props.obj.id}`;
    axios.delete(uri);
      browserHistory.push('/show-contact');
  }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.last_name}
          </td>
          <td>
            {this.props.obj.phone}
          </td>
          <td>
            {this.props.obj.email}
          </td>
          <td>
          <form onSubmit={this.handleSubmit}>
           <Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Editar</Link>
           <input type="submit" value="Eliminar" className="btn btn-danger"/>
         </form>
          </td>
        </tr>
    );
  }
}


export default TableRow;