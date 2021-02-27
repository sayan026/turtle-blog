import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Signin from "../components/Signin";
import Home from "../components/Home";

const mapStateToProps = state => {
    return {
        auth: state.auth.Authorization
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Signin} />
                    {
                        (this.props.auth !== "") &&
                        <Route path="/home" component={Home} />
                    }
                </Switch>
            </Router>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
