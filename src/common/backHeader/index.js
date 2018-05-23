import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';

class BackHeader extends Component {
    goBack = () => {
        this.props.history.goBack();
    }
    render() {
        return (
            <div className='BackHeader'>
                <header >
                    <span onClick={this.goBack}>
                        <i className='iconfont icon-fanhui'></i>
                    </span>
                    <h2>{this.props.title}</h2>
                </header>
            </div>
        )
    }
}
export default withRouter(BackHeader);
