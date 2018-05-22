import React, { Component } from 'react';
import { connect } from 'react-redux';
import './home.css';
import HomeHeader from '../../components/home/header/header';
import * as action from '../../redux/actions/home';
import { home_banner } from '../../http-server/home';
import HomeBanner from '../../components/home/banner/banner';
import LessonList from '../../components/home/lessonList/lessonList';
import ScrollList from '../../components/home/scrollList/scrollList';
import {setsession,getsession} from '../../utils';
class Home extends Component {
  componentDidMount() {
    //有数据就不加载
    if(!this.props.home.bannerList){ 
      const url = 'http://route.showapi.com/1287-1?showapi_appid=32747&showapi_sign=732aec4f8b344e74804bcc060f3a50dc';
      this.props.get_banner(url);
      const url_list = 'http://route.showapi.com/87-60?showapi_appid=32747&showapi_sign=732aec4f8b344e74804bcc060f3a50dc&provinceName=上海';
      this.props.get_lesson(url_list+'&page=1&limit=5');
    }else{//强制更新组件pdate
      this.forceUpdate()
    };
    if(getsession('home_scrollTop')){
      this.refs.scroll.scrollTop=getsession('home_scrollTop').top;
    }
  }
  componentWillUnmount(){//组件卸载 保存scrollTop
    let top=this.refs.scroll.scrollTop;
    setsession('home_scrollTop',{top})
  }
  chooseLesson = (type, text) => {
    this.props.check_lesson(type, text);
  }
  render() {
    let { list, isMore, isLoading } = this.props.home.lessonList;
    return (
      <div className='home'>
        <HomeHeader chooseLesson={this.chooseLesson} />

        <div className='content' ref='scroll'>
          <ScrollList element={this.refs.scroll}
            isMore={isMore}
            isLoading={isLoading}
            get_lesson={this.props.get_lesson}
            page={this.props.home.lessonList.page}
          >
            {this.props.home.bannerList ? <HomeBanner dataImg={this.props.home.bannerList} /> : ''}
            <LessonList  dataList={this.props.home.lessonList} />
          </ScrollList>
        </div>


      </div>
    )
  }
}
//mapStateToProps
//mapDispathToProps

const mapStateToProps = (state) => {
  return { ...state }
}
const mapDispathToProps = (action) => {
  return action;
}
export default connect(state => ({ ...state }), action)(Home)
