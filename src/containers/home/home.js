import React, { Component } from 'react';
import {connect} from 'react-redux';
import './home.css';
import HomeHeader from '../../components/home/header/header';
import * as action from '../../redux/actions/home';
class Home extends Component {
  chooseLesson=(type,text)=>{
    this.props.check_lesson(type,text);
    
  }
  render() {
    return (
      <div className='home'>
        <HomeHeader chooseLesson={this.chooseLesson} />
        <div className='con'>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
          <h2>选择的内容为：<strong>{this.props.home.current} | {this.props.home.text}</strong></h2>
        </div>
      </div>
    )
  }
}
//mapStateToProps
//mapDispathToProps

const mapStateToProps=(state)=>{
  return {...state}
}
const mapDispathToProps=(action)=>{
  return action;
}
export default  connect(state=>({...state}),action)(Home)
