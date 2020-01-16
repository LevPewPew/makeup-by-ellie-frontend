import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/rootReducer';
import AdminPage from '../pages/AdminPage';

const store = createStore(rootReducer);

function SandboxApp() {
  return (
    <Provider store={store}>
      <div className="SandboxApp">
        <h1>Hello World</h1>
        <h2>All Categories</h2>
        <div>
          <AdminPage />
        </div>
      </div>
    </Provider>
  );
}

export default SandboxApp;
