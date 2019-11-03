import React from 'react';
import geschichteData from '../database/geschichteData';

//function Topic ({ match }) {
//    const topic = geschichteData 
//    
//}

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