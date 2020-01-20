import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/rootReducer';
import AdminPage from '../pages/admin/AdminPage';

const store = createStore(rootReducer);

function SandboxApp() {
  return (
    <Provider store={store}>
      <div className="SandboxApp">
        <AdminPage />
      </div>
    </Provider>
  );
}

export default SandboxApp;
