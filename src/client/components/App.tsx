import * as React from 'react';
import '../scss/app';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RequestChirps from './public/RequestChirps';
import PostChirp from './public/PostChirp';
import Navbar from './shared/Navbar';
import AdminChirps from './admin/AdminChirps';

class IApp extends React.Component<IAppProps, IAppState> {
    render() {
        return (
            <Router>
                <>
                    <Navbar />
                    <div className="container">
                        <Switch>
                            <Route exact path='/' component={RequestChirps} />
                            <Route exact path='/new' component={PostChirp} />
                            <Route exact path='/admin/:id' component={AdminChirps} />
                        </Switch>
                    </div>
                </>
            </Router>
        );
    }
}

interface IAppProps { }
interface IAppState { }

export default IApp