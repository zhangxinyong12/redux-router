import React, { Component } from 'react';
import './banner.css';
export default class HomeBanner extends Component {
    componentDidMount() {
        const Swiper = window.Swiper;
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',//默认 水平  vertical 垂直
            loop: true,
            autoplay: {
                disableOnInteraction: false,//用户点击后 还自动 
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
        const data = this.props.dataImg;
        

            let dataImg = [];
            dataImg.push(data.showapi_res_body.data.img_1366);
            dataImg.push(data.showapi_res_body.data.img_1366);
            dataImg.push(data.showapi_res_body.data.img_1366);
            dataImg.push(data.showapi_res_body.data.img_1366);
            dataImg.push(data.showapi_res_body.data.img_1920);
            dataImg.push(data.showapi_res_body.data.img_1920);
            console.log(dataImg)
            return (
                <div className='home-banner'>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                dataImg.map((item, index) => (
                                    <div key={index} className="swiper-slide">
                                        <img src={item} alt="" />
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
