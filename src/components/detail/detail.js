import React, { Component } from 'react';
import './detail.css';
export default class DetailCom extends Component {
  goBack=()=>{
    this.props.back();
  }
  render() {
    const {addr,img,info,level,hosLink,hosName,tele}=this.props.pro||{};
    return (
      <div className='detail-con'>
        <header onClick={this.goBack}>
          <span>
            <i className='iconfont icon-fanhui'></i>
          </span>
          <h2>{hosName}</h2>
        </header>
        <div className='con'>
          <img src={img} alt=""/>
          <h6>{level}</h6>
          <span >
            官网地址:{hosLink}
          </span>
          
          <p>{info}</p>
          <p>电话：<a href={'tel'+tele}>{tele}</a></p>
        </div>
      </div>
    )
  }
}
