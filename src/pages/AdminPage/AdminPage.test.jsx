import React from 'react';
import { wait } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { renderWithRedux } from '../../utils/testing/redux';
import AdminPage from './AdminPage';
import { PORTFOLIO_DUMMY_DATA } from '../../utils/testing/dummyData';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

jest.setTimeout(10000);

beforeEach(() => {
  let mock = new MockAdapter(axios);
  mock.onGet(`${backendUrl}/portfolio`).reply(200, PORTFOLIO_DUMMY_DATA);
});

test('AdminPage document components have CRUD button components rendered', async () => {
  const { getAllByTestId } = renderWithRedux(
    <AdminPage />
  );

  await wait(() => getAllByTestId('Work'));

  expect(getAllByTestId('BtnDeleteDoc')).toBeInTheDocument();
});
