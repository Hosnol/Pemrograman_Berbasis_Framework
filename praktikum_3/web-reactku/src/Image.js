import React, { Component } from 'react';

class Image extends Component {
    render() {
        return (
            <img src={ this.props.linkGambar } width="100" height="100" alt="Food"/>
        );
    }
}
export default Image;