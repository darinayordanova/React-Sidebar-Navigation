import React, { Component, Suspense } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from "./Navigation/Navigation";
import routes from "./Container/Routes/routes";
import './globalStyles.css'

const renderLoader = () => <p>Loading</p>;


class App extends Component {

    render() {

        return (
            <Router
                basename={""}>
                <div className="d-flex">
                    <Navigation />
                    <div className="wrapper">
                        <Switch>
                            <Suspense fallback={renderLoader}>
                                {
                                    routes.map(({ path, name, component }) => {

                                        console.log(name)
                                        return (
                                            <Route exact key={path} path={path} component={component} />
                                        )
                                    })
                                }
                                
                            </Suspense>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
