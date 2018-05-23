import React, { Component } from 'react'
import './index.css';
export default class Login extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className='login'>
        <h2>登陆</h2>
      </div>
    )
  }
}
