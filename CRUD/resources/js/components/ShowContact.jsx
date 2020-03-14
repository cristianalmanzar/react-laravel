import React, {Component} from 'react';
import axios from 'axios';
import { browserHistory, Link } from 'react-router';
import TableRow from './TableRow';
import MyGlobleSetting from './MyGlobleSetting';
class ShowContact extends Component {
  constructor(props) {
       super(props);
       this.state = {value: '', contacts: ''};
       this.handleSubmit = this.handleSubmit.bind(this);
     }
     componentDidMount(){
       axios.get(MyGlobleSetting.url + '/api/agenda')
       .then(response => {
         this.setState({ contacts: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     tabRow(){
       if(this.state.contacts instanceof Array){
         return this.state.contacts.map(function(object, i){
             return  TableRow(object);

         })
       }
     }
     handleSubmit(event) {
        event.preventDefault();
        let uri = MyGlobleSetting.url + `/api/agenda/${event.target.id}`;
        axios.delete(uri);
        axios.get(MyGlobleSetting.url + '/api/agenda')
        .then(response => {
          this.setState({ contacts: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
        //   browserHistory.push('/show-contact');
    }


  render(){
    return (
      <div>
        <h1>Contactos</h1>


        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/add-contact">Añadir Contacto</Link>
          </div>
        </div><br />


        <table className="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Nombre</td>
                <td>Apellido</td>
                <td>Telefono</td>
                <td>Email</td>
                <td width="200px">Opciones</td>
            </tr>
            </thead>
            <tbody>
                {Object.keys(this.state.contacts).map((k, i) => {
                    let data = this.state.contacts[k];
                    return (
                    <tr key={i}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.last_name}</td>
                        <td>{data.phone}</td>
                        <td>{data.email}</td>
                        <td>
                        <form id={data.id} onSubmit={this.handleSubmit}>
                        <Link to={"edit/"+data.id} className="btn btn-primary">Editar</Link>
                        <input type="submit"  value="Eliminar" className="btn btn-danger"/>
                        </form>
                        </td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
    )
  }
}
export default ShowContact;