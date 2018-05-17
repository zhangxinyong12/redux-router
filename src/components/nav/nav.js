import React, { Component } from 'react';
import {NavLink,Link} from 'react-router-dom';
import './nav.css';
export default class Nav extends Component {
  
  render() {
    return (
      <div className='nav'>
        <NavLink to='/' exact activeClassName="active">
        <i className='iconfont icon-shouye'></i>
          <span>首页</span>
        </NavLink>
        <NavLink to='/product' activeClassName="active">
        <i className='iconfont icon-chanpin'></i>
          <span>产品</span>
        </NavLink>
        <NavLink to='/user' activeClassName="active">
        <i className='iconfont icon-gerenzhongxin'></i>        
          <span>个人中心</span>
        </NavLink>
      </div>
    )
  }
}
