import React, { Component } from 'react';
import{connect} from 'react-redux';
import {Link} from 'react-router-dom';
import User from '../../components/user';

import './user.css';
class Usercon extends Component {
  render() {
    return (
      <div className='user'>
        <div className='top'>
          <i className='iconfont icon-touxiang'></i>
          <Link to='/login'><span>登陆</span></Link>
        </div>
        <ul>
          <li>
              <i className='iconfont icon-wenti'></i>
              <span>常见问题</span>
              <i className='iconfont icon-xiangyoufanhui'></i>
          </li>
          <li>
              <i className='iconfont icon-guanyuwomen'></i>
              <span>关于我们</span>
              <i className='iconfont icon-xiangyoufanhui'></i>
          </li>
          <li>
              <i className='iconfont icon-xiugaimima'></i>
              <span>修改密码</span>
              <i className='iconfont icon-xiangyoufanhui'></i>
          </li>
        </ul>
      </div>
    )
  }
}
export default connect()(Usercon)
