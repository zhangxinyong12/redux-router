import React, { Component } from 'react';
import { connect } from 'react-redux';
import './home.css';
import HomeHeader from '../../components/home/header/header';
import * as action from '../../redux/actions/home';
import { home_banner } from '../../http-server/home';
import HomeBanner from '../../components/home/banner/banner';
import LessonList from '../../components/home/lessonList/lessonList';
import ScrollList from '../../components/home/scrollList/scrollList';
class Home extends Component {
  componentDidMount() {
    const url = 'http://route.showapi.com/1287-1?showapi_appid=32747&showapi_sign=732aec4f8b344e74804bcc060f3a50dc';
    this.props.get_banner(url);
    const url_list = './datajson/home.json';
    this.props.get_lesson(url_list);
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
          >
            {this.props.home.bannerList ? <HomeBanner dataImg={this.props.home.bannerList} /> : ''}
            <LessonList dataList={this.props.home.lessonList} />
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
