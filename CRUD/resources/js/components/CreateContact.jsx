import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';


class CreateContact extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: '',
        last_name: '',
        phone: '',
        email: ''
    };


    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit      = this.handleSubmit.bind(this);
  }


  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleSubmit(e){
    e.preventDefault();
    const { name, last_name, phone, email } = this.state;
    const contacts = this.state
    let uri = MyGlobleSetting.url + '/api/agenda';
    axios.post(uri, contacts).then((response) => {
      browserHistory.push('/show-contact');
    });
  }


    render() {
      const { name, last_name, phone, email } = this.state;
      return (
      <div>
        <h1>Crear Contacto</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Nombre</label>
                <input type="text" name="name" required className="form-control" value={name} onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label>Apellido</label>
                    <input type="text" name="last_name"  className="form-control"  value={last_name} onChange={this.handleInputChange}/>
                </div>
            </div>
          </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Teléfono</label>
                  <input type="text" name="phone" required className="form-control " value={phone} onChange={this.handleInputChange}/>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Correo Electrónico</label>
                  <input type="text" name="email" required className="form-control" value={email} onChange={this.handleInputChange}/>
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <button className="btn btn-primary">Guardar</button>
            </div>
        </form>
  </div>
      )
    }
}
export default CreateContact;