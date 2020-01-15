import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import rootReducer from '../reducers/rootReducer';
import WorkForm from './WorkForm';

// const store = createStore(rootReducer);

function App() {
  return (
    // <Provider store={store}>
      <div className="App">
        <h1>Hello World</h1>
        <h2>All Categories</h2>
        <div>
          <WorkForm />
        </div>
      </div>
    // </Provider>
  );
}

export default App;
