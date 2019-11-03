import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Topic from '../components/Topic';
import Paragraph from '../components/paragraph';
import geschichteData from '../database/geschichteData';

function paragraphs({ match }) {
}

class Geschichte extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <ol>
                        {geschichteData.map(({ name, id }) => (
                            <li key={id}>
                                <Link to={`/geschichte/${id}`}>{name}</Link>
                            </li>
                        ))}
                    </ol>
                    <Switch>
                        {geschichteData.map(({ name, id, description }) => (
                            <Route exact path={`/geschichte/${id}`}>
                                <Topic heading={name}>
                                    <Paragraph content={description}/>
                                </Topic>
                            </Route>
                        ))}
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Geschichte;