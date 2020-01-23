import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Service from './Service';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/rootReducer';

// const store = createStore(rootReducer);

// TODO get someone to explain this wild syntax
function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

test('Service displays title', () => {
  const { getByText } = renderWithRedux(
    <Service
      key={1}
      id={1}
      title={'DUMMY TITLE'}
      description={'blah blah blah'}
      imageUrl={'blob blob blob'}
    />, {
      initialState: { adminDashReducer: { onAdminDash: true } },
    }
  );

  expect(getByText('TESTLOL')).toBeInTheDocument();
  // expect(getByText('DUMMY TITLE')).toBeInTheDocument();
});

// TODO recreate the basic test lol why did i over write?
