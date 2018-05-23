import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css';

export default class User extends Component {
  
  render() {
    return (
      <div className='user-com'>
        <div className='top'>
            <i className='iconfont icon-touxiang'></i>
            {/* <Link>
                <span>登陆</span>
            </Link> */}
        </div>
      </div>
    )
  }
}
