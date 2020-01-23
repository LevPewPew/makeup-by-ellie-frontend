import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Service from './Service';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/rootReducer';


const store = createStore(rootReducer);

test("Service displays title", () => {
  render(
    <Provider store={store}>
      <Service
        key={1}
        id={1}
        title={'DUMMY TITLE'}
        description={'blah blah blah'}
        imageUrl={'blob blob blob'}
      />
    </Provider>
  );

  expect(screen.getByText('DUMMY TITLE')).toBeInTheDocument();
});