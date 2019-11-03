import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Geschichte from '../pages/Geschichte';
import Home from '../pages/Home';

class Nav extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/geschichte'>Geschichte</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path='/geschichte'>
                            <Geschichte/>
                        </Route>
                        <Route exact path='/'>
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Nav;