import React, { Component } from 'react';
import './banner.css';

export default class Banner extends Component {
    constructor(){
        super();
        this.dataImg=[
            {src:'./imges/banner-01.jpg'},
            {src:'./imges/banner-02.jpg'},
            {src:'./imges/banner-03.jpg'},
            {src:'./imges/banner-04.jpg'},
        ]

    }
    componentDidMount() {
        
        const Swiper = window.Swiper;
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',//默认 水平  vertical 垂直
            loop: true,
            autoplay:{
                disableOnInteraction:false,//用户点击后 还自动 
            },//自动
           
        
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            scrollbar: {
                // el: '.swiper-scrollbar',
            },
        })
    }
    render() {
        const dataImg=this.dataImg||[];
        return (
            <div className='banner'>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            dataImg.map((item,index)=>(
                                <div key={index} className="swiper-slide">
                                    <img src={ item.src} alt=""/>
                                </div>
                            ))
                        }
                        
                    </div>
                    {/* <!-- 如果需要分页器 --> */}
                    <div className="swiper-pagination"></div>
                    {/* <!-- 如果需要导航按钮 --> */}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    {/* <!-- 如果需要滚动条 --> */}
                    <div className="swiper-scrollbar"></div>
                </div>
            </div>
        )
    }
}
