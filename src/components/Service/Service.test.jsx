import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/rootReducer';
import Service from './Service';

const DUMMY_TITLE = 'DUMMY_TITLE';
const DUMMY_DESCRIPTION = 'DUMMY_DESCRIPTION';
const DUMMY_URL = 'DUMMY_URL';

function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  }
}

test('Service renders its non-image props', () => {
  const { getByText } = renderWithRedux(
    <Service
      key={1}
      id={1}
      title={DUMMY_TITLE}
      description={DUMMY_DESCRIPTION}
      imageUrl={DUMMY_URL}
    />, {
      initialState: { adminDashReducer: { onAdminDash: true } }
    }
  );

  expect(getByText(DUMMY_TITLE)).toBeInTheDocument();
  expect(getByText(DUMMY_DESCRIPTION)).toBeInTheDocument();
});

test('Service has a delete button when rendered when onAdminDash state is true', () => {
  const { getByTestId } = renderWithRedux(
    <Service
      key={1}
      id={1}
      title={DUMMY_TITLE}
      description={DUMMY_DESCRIPTION}
      imageUrl={DUMMY_URL}
    />,
    {
      initialState: { adminDashReducer: { onAdminDash: true } }
    }
  );
  expect(getByTestId('BtnDeleteDoc')).toBeInTheDocument();
});

test('Service does NOT have a delete button when rendered when onAdminDash state is false', () => {
  const { queryByTestId } = renderWithRedux(
    <Service
      key={1}
      id={1}
      title={DUMMY_TITLE}
      description={DUMMY_DESCRIPTION}
      imageUrl={DUMMY_URL}
    />,
    {
      initialState: { adminDashReducer: { onAdminDash: false } }
    }
  );

  expect(queryByTestId('BtnDeleteDoc')).toBeNull();
});
