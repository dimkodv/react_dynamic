import React, { Component } from 'react';
import './stylesheet/css/pages/dynamic-component.css';

class DynamicComponent extends Component {
    render() {
        const {title, content} = this.props

        return (
            <div>
                <h1>{title}</h1>
                <p>{content}</p>
                <div className="dyn">qq</div>
            </div>
        )
    }
}

export default DynamicComponent