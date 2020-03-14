require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';


import Master from './components/Master';

import Example from './components/Example';
import CreateContact from './components/CreateContact';
import ShowContact from './components/ShowContact';
import UpdateContact from './components/UpdateContact';


render(
  <Router history={browserHistory}>
     <Route path="/" component={Master} >
      <Route path="/add-contact" component={CreateContact} />
      <Route path="/show-contact" component={ShowContact} />
      <Route path="/edit/:id" component={UpdateContact} />
    </Route>
  </Router>,
    
    document.getElementById('agenda-app'));
