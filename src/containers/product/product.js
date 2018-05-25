import React, { Component } from 'react';
import { connect } from 'react-redux';
import './product.css';

import Banner from '../../components/product/banner';

class Product extends Component {
  componentWillMount() {
    //地图懒加载
    const init = () => {
      const AMap = window.AMap;
      var map = new AMap.Map('map', {
        center: [121.261951, 31.195297],//德邦位置
        zoom: 16
      });
      map.plugin(["AMap.ToolBar"], function () {
        map.addControl(new AMap.ToolBar());
      });
    }
    window.init=init;
  }
  render() {
    return (
      <div className='product'>
        <Banner />
        <div id='map'>

        </div>
      </div>
    )
  }
}
export default connect()(Product)
