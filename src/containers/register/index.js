import React, { Component } from 'react';
import {connect} from 'react-redux';
import BackHeader from '../../common/backHeader';
import {setsession,getsession} from '../../utils';//session 模拟ajax请求

import './index.css';
class Register extends Component {
  componentWillMount(){//默认存储一个
    const user={
      username:'123456',
      password:'123456'
    }
    setsession('user',user);
    const {username}=getsession('user');
    console.log(username,getsession('user'))
  }
  render() {
    
    return (
      <div className='register nav-none'>
        <BackHeader title='注册' />
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
            <button>注册</button>
          </li>
        </ul>
      </div>
    )
  }
}
export default  connect()(Register)