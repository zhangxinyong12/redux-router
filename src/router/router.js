import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';

import Home from '../containers/home/home';
import Product from '../containers/product/product';
import User from '../containers/user/user';


export default class Routers extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/'  component={Home}/>
          <Route  path='/product'  component={Product}/>
          <Route  path='/user'  component={User}/>          
        </Switch>
      </div>
        
    )
  }
}
