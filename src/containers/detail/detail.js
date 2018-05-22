import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/home';
import './detail.css';

import DetailCom from '../../components/detail/detail';
class Detail extends Component {
  componentWillMount(){
      if(!this.props.history.location.state){
        this.props.history.push('/')
      }
      this.item=this.props.history.location.state;
  }
  render() {
    return (
      <div className='detail'>
        <DetailCom pro={this.item} back={this.props.history.goBack} />
      </div>
    )
  }
}
export default connect(state => ({ ...state }), action)(Detail)
