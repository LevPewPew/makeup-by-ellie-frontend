import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/rootReducer';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Makeup by Ellie</h1>
        <p>PLACEHOLDER</p>
        <p>PLACEHOLDER</p>
        <p>PLACEHOLDER</p>
        <p>PLACEHOLDER</p>
        <p>PLACEHOLDER</p>
        <p>PLACEHOLDER</p>
      </div>
    </Provider>
  );
}

export default App;
