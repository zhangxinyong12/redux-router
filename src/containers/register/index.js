import React, { Component } from 'react';
import { connect } from 'react-redux';
import BackHeader from '../../common/backHeader';
import * as action from '../../redux/actions/user';
import { Link } from 'react-router-dom';
import './index.css';
class Register extends Component {

  goRegister = () => {
    console.log(this.username, this.password);
    this.props.reg_user({ username: this.username.value, password: this.password.value });
    setTimeout(() => {
      console.log(this.props.user.err)
      if (!this.props.user.err) {
        this.props.history.push('/');
      }
    }, 1000)

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
            <input type="text" placeholder='请输入用户名' ref={element => this.username = element} />
          </li>
          <li>
            <input type="text" placeholder='请输入密码' ref={element => this.password = element} />
          </li>
          <li>
            <button onClick={this.goRegister}>注册</button>
          </li>
        </ul>
      </div>
    )
  }
}
export default connect(state => ({ ...state }), action)(Register)