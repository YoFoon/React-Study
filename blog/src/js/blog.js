import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import BlogList from './list/index';
import Detail from "./detail/index";

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={BlogList}/>
    <Route path="/depail/:title" component={Detail}/>
  </Router>
), document.getElementById('app'));
