import React, { Component } from 'react';
import {connect} from 'react-redux';
import './home.css';
import HomeHeader from '../../components/home/header/header';
import * as action from '../../redux/actions/home';
import {home_banner} from '../../http-server/home';
import HomeBanner from '../../components/home/banner/banner';
class Home extends Component {
  componentDidMount(){
    const url='http://route.showapi.com/1287-1'; 
    this.props.get_banner(url,{showapi_appid:'32747',showapi_sign:'732aec4f8b344e74804bcc060f3a50dc'});
    
  }
  chooseLesson=(type,text)=>{
    this.props.check_lesson(type,text);
  }
  render() {
    return (
      <div className='home'>
        <HomeHeader chooseLesson={this.chooseLesson} />
        {this.props.home.bannerList?<HomeBanner dataImg={this.props.home.bannerList} />:''}
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
