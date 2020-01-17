import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/rootReducer';
import ServicesContainer from './ServicesContainer';

const store = createStore(rootReducer);

function SandboxApp() {
  return (
    <Provider store={store}>
      <div className="SandboxApp">
        <ServicesContainer />
      </div>
    </Provider>
  );
}

export default SandboxApp;
