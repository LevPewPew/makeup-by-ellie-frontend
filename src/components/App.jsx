import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/rootReducer';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import HomePage from '../pages/home/HomePage.jsx';
import ContactPage from '../pages/contact/ContactPage';

const store = createStore(rootReducer);

function submit(values)
{
  console.log(values);
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Makeup by Ellie</h1>
        <BrowserRouter>
              <Switch>
                <Route exact path="/"><HomePage/></Route>
                <Route exact path="/contact"><ContactPage onSubmit={submit}/></Route>
              </Switch>
          </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
