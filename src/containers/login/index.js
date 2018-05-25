import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/user';
import BackHeader from '../../common/backHeader';
import {Link} from 'react-router-dom';
// import { Button } from 'antd';
import Button from 'antd/lib/button';
import './index.css';
class Login extends Component {
  componentDidMount(){
    
    console.log(this.props)
  }
  goLogin=()=>{
    console.log(this.username,this.password);
    this.props.login_user({username:this.username.value,password:this.password.value});
    setTimeout(()=>{
      console.log(this.props.user.err)
      if(!this.props.user.err){
        this.props.history.push('/register');
      }
    },1000)
    
  }
  render() {
    
    return (
      <div className='login nav-none'>
        <BackHeader title='登陆' />
        <div>
          <i className='iconfont icon-touxiang'></i>
          
        </div>
        <ul>
          <li>
            <input type="text" placeholder='请输入用户名' ref={element=>this.username=element}/>
          </li>
          <li>
            <input type="text" placeholder='请输入密码' ref={element=>this.password=element}/>
          </li>
          <li>
            <Link to='/register'><span className='reg'>没有账号，马上注册</span></Link>
          </li>
          <li>
            <Button type="primary" onClick={this.goLogin}>登陆</Button>
          </li>
          <li>
            <h3>{this.props.user.err.err}</h3>
          </li>
        </ul>
      </div>
    )
  }
}
export default connect(state => ({ ...state }), action)(Login)
