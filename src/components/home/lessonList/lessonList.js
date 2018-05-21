import React, { Component } from 'react';
import './lessonList.css';
export default class LessonList extends Component {
 
  render() {
    const {dataList}=this.props;
    return (
      <div className='lessonList'>
        <h3>课程列表</h3>
        
        <ul>
          {dataList.list.map((item,index)=>(
            <li key={index}>
              <img src={item.url} alt=""/>
              <h4>{item.title}</h4>
              <h5>{item.prise}</h5>
            </li>
          ))}
        </ul>
        <div className={dataList.isLoading?'loading':''}>
          <h3>{dataList.isLoading?'正在加载中......':null}</h3>
        </div>
      </div>
    )
  }
}
