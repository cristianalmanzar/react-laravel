import React, {Component} from 'react';
import axios from 'axios';
import { browserHistory, Link } from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';


class UpdateContact extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name: '',
        last_name: '',
        phone: '',
        email: ''
      };


      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  componentDidMount(){
    axios.get(MyGlobleSetting.url + `/api/agenda/${this.props.params.id}/edit`)
    .then(response => {
        this.setState({ name: response.data.name, last_name: response.data.last_name, phone: response.data.phone, email: response.data.email });
        console.log(this.state);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const contacts = {
      name: this.state.name,
      last_name: this.state.last_name,
      phone: this.state.phone,
      email: this.state.email
    }
    let uri = MyGlobleSetting.url + '/api/agenda/'+this.props.params.id;
    axios.patch(uri, contacts).then((response) => {
          console.log(this.props.history);
          browserHistory.push('/show-contact');
    });
  }
  render(){
    return (
      <div>
        <h1>Editar Contacto</h1>
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/show-contact" className="btn btn-success">Todos los contactos</Link>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
            <div class="row">
                <div class="col-md-6"> 
                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text"
                        name="name"
                        className="form-control"
                        value={this.state.name}
                        onChange={this.handleInputChange} />
                    </div>
                </div>

                <div class="col-md-6"> 
                    <div className="form-group">
                        <label>Apellido</label>
                        <input type="text"
                        name="last_name"
                        className="form-control"
                        value={this.state.last_name}
                        onChange={this.handleInputChange} />
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6"> 
                    <div className="form-group">
                        <label>Telefono</label>
                        <input type="text"
                        name="phone"
                        className="form-control"
                        value={this.state.phone}
                        onChange={this.handleInputChange} />
                    </div>
                </div>

                <div class="col-md-6"> 
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text"
                        name="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                    </div>
                </div>
            </div>


            


            <div className="form-group">
                <button className="btn btn-primary">Guardar</button>
            </div>
        </form>
    </div>
    )
  }
}
export default UpdateContact;