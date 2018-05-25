import React, { Component } from 'react';
import { connect } from 'react-redux';
import BackHeader from '../../common/backHeader';

import './product.css';

class Product extends Component {
  componentDidMount() {
    //地图懒加载
    const AMap = window.AMap;
    var map = new AMap.Map('map', {
      center: [121.261951, 31.195297],//德邦位置
      zoom: 16
    });
    map.plugin(["AMap.ToolBar"], function () {
      map.addControl(new AMap.ToolBar());
    });
  }
  render() {
    return (
      <div className='product'>
        <BackHeader title='地图' />
      
        <div id='map-box'>
          <div id='map'></div>
        </div>
      </div>
    )
  }
}
export default connect()(Product)
