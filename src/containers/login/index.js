import React, { Component } from 'react';
import {connect} from 'react-redux';
import BackHeader from '../../common/backHeader';
import {Link} from 'react-router-dom';

import './index.css';
class Login extends Component {
  
  render() {
    
    return (
      <div className='login nav-none'>
        <BackHeader title='登陆' />
        <div>
          <i className='iconfont icon-touxiang'></i>
        </div>
        <ul>
          <li>
            <input type="text" placeholder='请输入用户名'/>
          </li>
          <li>
            <input type="text" placeholder='请输入密码'/>
          </li>
          <li>
            <Link to='/register'><span>没有账号，马上注册</span></Link>
          </li>
          <li>
            <button>登陆</button>
          </li>
        </ul>
      </div>
    )
  }
}
export default connect()(Login)
