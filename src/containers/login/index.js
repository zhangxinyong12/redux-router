import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/user';
import BackHeader from '../../common/backHeader';
import {Link} from 'react-router-dom';
import { List, Switch,Button,DatePicker} from 'antd-mobile';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';
import './index.css';
const extra = {
  '2017/07/15': { info: 'Disable', disable: true },
};

const now = new Date();
class Login extends Component {
  constructor(){
    super();
    this.state={
      visible:false
    }
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
  isShowTime=()=>{
    this.setState({
      visible:!this.state.visible
    })
  }
  formatDate=(date)=>{
    /* eslint no-confusing-arrow: 0 */
    const pad = n => n < 10 ? `0${n}` : n;
    const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
    return `${dateStr} ${timeStr}`;
  }
  render() {
    const {visible}=this.state;
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
            <Button type="primary" className='goBtn' onClick={this.goLogin}>登陆</Button>
          </li>
          <li>
            <Button type='primary' onClick={this.isShowTime}>选择日期</Button>
          </li>
          
          <li>
          <DatePicker 
            mode='date'
            extra="Optional"
            value={now}
            title="选择日期"
            format='YYYY-MM-DD'
            onChange={date=>console.log(this.formatDate(date))}
            onOk={(val)=>{console.log(val)}}
          >
            <List.Item arrow="horizontal">日期</List.Item>
          </DatePicker>
          
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
