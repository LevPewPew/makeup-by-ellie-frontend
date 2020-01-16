import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/rootReducer';
import Service from '../components/Service';

const store = createStore(rootReducer);

function SandboxApp() {
  return (
    <Provider store={store}>
      <div className="SandboxApp">
        <h1>Hello World</h1>
        <h2>All Categories</h2>
        <div>
          <Service
            title={'title!'}
            description={'description!'}
            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPSnykjoosi4LXvLBhuPIl3JWNjHi2cfa-wt0O1gODuB1Gw0vo'}
          />
        </div>
      </div>
    </Provider>
  );
}

export default SandboxApp;
