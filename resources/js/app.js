require('./bootstrap');
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./store/index";
import Main from "./screens/main";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

if(document.getElementById("app")) {
    ReactDOM.render(
        <Provider store={store}>
            <Main />
        </Provider>,
        document.getElementById("app")
    );
}
