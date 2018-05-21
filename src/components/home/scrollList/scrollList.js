import React, { Component } from 'react';

export default class ScrollList extends Component {
    constructor(){
        super();
        this.state={
            isaddEvent:false
        }
    }
    componentWillReceiveProps(nextProps){
        
        const url_list = 'http://route.showapi.com/87-60?showapi_appid=32747&showapi_sign=732aec4f8b344e74804bcc060f3a50dc&provinceName=上海';
        if(nextProps.element&&!this.state.isaddEvent){
            nextProps.element.addEventListener('scroll',()=>{
                //节流
                clearTimeout(this.scroll_time);
                let {scrollTop,offsetHeight,scrollHeight}=nextProps.element;                
                this.scroll_time=setTimeout(()=>{
                    //距离底部多少
                    if(scrollTop+offsetHeight+50>scrollHeight&&this.props.isMore&&!this.props.isLoading){
                        this.props.get_lesson(url_list+'&page='+this.props.page+'&limit=5');
                    };
                },30);
                
            });
            this.setState({
                isaddEvent:true
            });
        }
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
