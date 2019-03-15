
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '../App';
import Home from '../home/Home';
import Part from '../part/Part';
import Detail from '../detail/Detail';
import store from '../store/store';

const Root = () => (
    <Provider store={store}>
        <div>
            <Switch>
                <Route
                    path='/'
                    render={props => (
                        <App>
                            <Switch>
                                <Route path='/' exact component={Home} />
                                <Route path='/home' component={Home} />
                                <Route path='/part' component={Part} />
                                <Route path='/detail' component={Detail} />
                                {/* 路由不正确时，默认跳转回home页面 */}
                                <Route render={() => <Redirect to="/" />} />
                            </Switch>
                        </App>
                    )}>

                </Route>
            </Switch>
        </div>
    </Provider>
)

export default Root;