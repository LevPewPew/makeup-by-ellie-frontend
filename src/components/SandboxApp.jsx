import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/rootReducer';
import PortfolioContainer from './PortfolioContainer';

const store = createStore(rootReducer);

function SandboxApp() {
  return (
    <Provider store={store}>
      <div className="SandboxApp">
        <PortfolioContainer />
      </div>
    </Provider>
  );
}

export default SandboxApp;
