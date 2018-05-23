import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';

import Home from '../containers/home/home';
import Product from '../containers/product/product';
import User from '../containers/user/user';
import Detail from '../containers/detail/detail';
import Register from '../containers/register';
import Login from '../containers/login';
export default class Routers extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/'  component={Home}/>
          <Route  path='/product'  component={Product}/>
          <Route  path='/detail'  component={Detail}/>
          <Route  path='/user'  component={User}/>          
          <Route  path='/register'  component={Register}/>          
          <Route  path='/login'  component={Login}/>          
          <Route  path='/register'  component={Register}/>          
        </Switch>
      </div>
        
    )
  }
}
