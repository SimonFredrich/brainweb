import React from 'react';

class Topic extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.heading}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Topic;