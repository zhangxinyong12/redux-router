import React, { Component } from 'react';
import './detail.css';
import BackHeader from '../../common/backHeader';
export default class DetailCom extends Component {
  
  render() {
    const {addr,img,info,level,hosLink,hosName,tele}=this.props.pro||{};
    return (
      <div className='detail-con nav-none'>
        <BackHeader title={hosName} />
        <div className='con'>
          <img src={img} alt=""/>
          <h6>{level}</h6>
          <span >
            官网地址:{hosLink}
          </span>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;电话：<a href={'tel:'+tele}>{tele}</a></p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{'简介:'+info}</p>
          
        </div>
      </div>
    )
  }
}
