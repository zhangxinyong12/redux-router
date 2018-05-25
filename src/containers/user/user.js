import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import User from '../../components/user';
import { setsession, getsession } from '../../utils';
import * as action from '../../redux/actions/user';
import './user.css';
class Usercon extends Component {
  componentWillMount() {//默认存储一个
    console.log(this.props)
    const user = {
      username: '123456',
      password: '123456'
    }
    setsession('user', user);
    const { username } = getsession('user');
  }
  render() {
    return (
      <div id="user">
        <div className='user'>
          <div className='top'>
            <i className='iconfont icon-touxiang'></i>
            {this.props.user.userInfo.user ? <h2>{this.props.user.userInfo.user}</h2> :
              <Link to='/login'><span>登陆</span></Link>}

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
      </div>
    )
  }
}
export default connect(state => ({ ...state }), action)(Usercon)
