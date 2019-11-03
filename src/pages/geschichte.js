import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Topic from '../components/Topic';
import Paragraph from '../components/paragraph';

class Geschichte extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <h1>
                        <Link to='/geschichte/attische-demokratie'>Attische Demokratie</Link>
                        <Link to='/geschichte/thema2'>Thema 2</Link>
                    </h1>
                    <Switch>
                        <Route path='/geschichte/attische-demokratie'>
                            <Topic heading='Attische Demokratie'>
                                <Paragraph content='paragraph1'/>
                                <Paragraph content='paragraph2'/>
                            </Topic>
                        </Route>
                        <Route path='/geschichte/thema2'>
                            <Topic heading='Thema 2'>
                                <Paragraph content='paragraph1'/>
                                <Paragraph content='paragraph2'/>
                            </Topic>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Geschichte;