import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/rootReducer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navbar from './navbar/Navbar.jsx';
import HomePage from '../pages/home/HomePage.jsx';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Switch>
                <Route exact path="/"><HomePage/></Route>
              </Switch>
          </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
