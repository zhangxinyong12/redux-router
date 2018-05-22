import React, { Component } from 'react';
import './scrollList.css';

export default class ScrollList extends Component {
    constructor(){
        super();
        this.state={
            isaddEvent:false,
            scrollY:0
        }
    }
    componentWillReceiveProps(nextProps){
        const url_list = 'http://route.showapi.com/87-60?showapi_appid=32747&showapi_sign=732aec4f8b344e74804bcc060f3a50dc&provinceName=上海';
        if(nextProps.element&&!this.state.isaddEvent){
            nextProps.element.addEventListener('scroll',()=>{
                this.setState({
                    scrollY:nextProps.element.scrollTop
                })
                //节流
                clearTimeout(this.scroll_time);
                let {scrollTop,offsetHeight,scrollHeight}=nextProps.element;                
                this.scroll_time=setTimeout(()=>{
                    //距离底部多少
                    if(scrollTop+offsetHeight+120>scrollHeight&&this.props.isMore&&!this.props.isLoading){
                        this.props.get_lesson(url_list+'&page='+this.props.page+'&limit=5');
                    };
                },30);         
            });
            this.setState({
                isaddEvent:true
            });
        }
    }
    
  goTop=(speed=300)=>{
    //默认300ms 返回顶部 计算递减量
    const x=this.props.element.scrollTop/speed;
    const time=setInterval(()=>{
      if(this.props.element.scrollTop>0){
        this.props.element.scrollTop=(this.props.element.scrollTop-x)<=0?0:this.props.element.scrollTop-x;
      }else{
        clearInterval(time);
      }
    },1)
  }
    render() {
        const scrollY=this.state.scrollY||0;
        return (
            <div className='scroll'>
                {this.props.children}
                {scrollY>1000?
                    <div onClick={()=>this.goTop()} className='go-top'>
                        <i className='iconfont icon-fanhuidingbu'></i>
                    </div>:''
                }
            </div>
        )
    }
}
