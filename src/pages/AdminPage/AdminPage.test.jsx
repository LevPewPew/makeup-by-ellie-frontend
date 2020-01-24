import React from 'react';
import { wait } from '@testing-library/react';
import '@testing-library/jest-dom';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { renderWithRedux } from '../../utils/testing/redux';
import AdminPage from './AdminPage';
import { PORTFOLIO_DUMMY_DATA } from '../../utils/testing/dummyData';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

beforeEach(() => {
  let mock = new MockAdapter(Axios);
  mock.onGet(`${backendUrl}/portfolio`).reply(200, PORTFOLIO_DUMMY_DATA);
});

test('AdminPage document components have CRUD button components rendered', async () => {
  const { getAllByTestId } = renderWithRedux(
    <AdminPage />
  );

  await wait(() => getAllByTestId('Work'));

  expect(getAllByTestId('BtnDeleteDoc'));
});
