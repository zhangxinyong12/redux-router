import React, { Component } from 'react';

export default class ScrollList extends Component {
    constructor(){
        super();
        this.state={
            isaddEvent:false
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.element&&!this.state.isaddEvent){
            nextProps.element.addEventListener('scroll',()=>{
                const url_list = './datajson/home.json';                
                //节流
                clearTimeout(this.scroll_time);
                this.scroll_time=setTimeout(()=>{
                    let {scrollTop,offsetHeight,scrollHeight}=nextProps.element;
                    //距离底部多少
                    if(scrollTop+offsetHeight+90>scrollHeight&&this.props.isMore&&!this.props.isLoading){
                        this.props.get_lesson(url_list);
                        clearTimeout(this.scroll_time);
                    };
                },50);
                
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
