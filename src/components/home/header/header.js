import React, { Component } from 'react';

import './header.css';

export default class HomeHeader extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false,
            firstLick:false
        }
    }
    componentWillMount(){
    }
    changShow=()=>{
        this.setState({
            isShow:!this.state.isShow,
            firstLick:true
        })
    }
    check=(e)=>{
        const chooseLesson=this.props.chooseLesson;//接收父级的函数
        const type=e.target.getAttribute('type');
        const text=e.target.innerHTML;
        chooseLesson(type,text);
        this.changShow();
    }
    render() {
        const isShow = this.state.isShow;
        const firstLick=this.state.firstLick;
        const fead=isShow?'feadIn':'feadOut'
        return (
            <div className='home-header'>
                <div>
                    <img src="./imges/logo.png" alt="" />
                    <span>
                        {isShow ? <i onClick={this.changShow} className='iconfont icon-guanbi'></i> :
                            <i onClick={this.changShow} className='iconfont icon-liebiao'></i>}
                    </span>
                </div>

                {firstLick?<ul className={fead} onClick={this.check}>
                    <li type='1'>Node课程培训</li>
                    <li type='2'>HTML培训</li>
                    <li type='3'>视频课程</li>
                    <li type='4'>文档讲解</li>
                </ul>:''}
            </div>
        )
    }
}
