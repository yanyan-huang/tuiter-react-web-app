import React from "react";
// import the component that consumes the data
import HelloReduxExampleComponent from "./hello-redux-example-component";
import hello from "./reducers/hello"; // import the reducer that calculates/generates the data
import todos from "./reducers/todos-reducer"; // import the new reducer
import { Provider } from "react-redux";// import Provider which will deliver the data
// import {createStore} from "redux"; // old syntax: import createStore to store data from reducers
import { configureStore } from '@reduxjs/toolkit'; // import configureStore function, instead of createStore
import Todos from "./todos-component"; // import new component to render todos


// const store = createStore(hello); // create data storage
const store = configureStore({ // combine all reducers into a single store
    reducer: {hello, todos}           // each available through these namespaces
});



const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/> 
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};

export default ReduxExamples;
