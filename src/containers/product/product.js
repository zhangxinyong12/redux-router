import React, { Component } from 'react';
import { connect } from 'react-redux';
import BackHeader from '../../common/backHeader';
import {GET} from '../../http-server/http-model';
import './product.css';

class Product extends Component {
  componentDidMount() {
    const url='./datajson/guiji.json';
    let data_guiji=[];
    GET(url).then(data=>{
      data.data.map((item,index)=>{
        data_guiji.push([120+Math.random(),31+Math.random()]);
        
      });
      console.log(data_guiji)
      guiji_init(data_guiji)
    })
    //地图懒加载
    const AMap = window.AMap;
    var map = new AMap.Map('map', {
      center: [120.92328557355442, 31.031824940204096],
      zoom: 16
    });
    map.plugin(["AMap.ToolBar"], function () {
      map.addControl(new AMap.ToolBar());
    });
    function guiji_init(data){
      window.AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], function(PathSimplifier, $) {

        if (!PathSimplifier.supportCanvas) {
            alert('当前环境不支持 Canvas！');
            return;
        }

        var pathSimplifierIns = new PathSimplifier({
            zIndex: 100,
            //autoSetFitView:false,
            map: map, //所属的地图实例

            getPath: function(pathData, pathIndex) {

                return pathData.path;
            },
            getHoverTitle: function(pathData, pathIndex, pointIndex) {

                if (pointIndex >= 0) {
                    //point 
                    return pathData.name + '，点：' + pointIndex + '/' + pathData.path.length;
                }

                return pathData.name + '，点数量' + pathData.path.length;
            },
            renderOptions: {

                renderAllPointsIfNumberBelow: -1 //绘制路线节点，如不需要可设置为-1
            }
        });

        window.pathSimplifierIns = pathSimplifierIns;
        console.log(data,data.length)
        //设置数据
        pathSimplifierIns.setData([{
            name: '路线0',
            path: data_guiji
        }]);

        //对第一条线路（即索引 0）创建一个巡航器
        // var navg1 = pathSimplifierIns.createPathNavigator(0, {
        //     loop: true, //循环播放
        //     speed: 1000000 //巡航速度，单位千米/小时
        // });

        // navg1.start();
      })
    }
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
