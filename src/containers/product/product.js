import React, { Component } from 'react';
import {connect} from 'react-redux';
import './product.css';

import Banner from '../../components/product/banner';

class Product extends Component {
  render() {
    return (
      <div className='product'>
        <Banner />
      </div>
    )
  }
}
export default  connect()(Product)
