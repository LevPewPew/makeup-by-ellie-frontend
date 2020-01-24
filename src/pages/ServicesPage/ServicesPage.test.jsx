import React from 'react';
import { wait } from '@testing-library/react';
import '@testing-library/jest-dom';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { renderWithRedux } from '../../utils/testing/redux';
import ServicesPage from './ServicesPage';
import { SERVICES_DUMMY_DATA } from '../../utils/testing/dummyData';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

beforeEach(() => {
  let mock = new MockAdapter(Axios);
  mock.onGet(`${backendUrl}/services`).reply(200, SERVICES_DUMMY_DATA);
});

test('Admin Page document components have CRUD button components rendered', async () => {
  const { queryByTestId, getAllByTestId } = renderWithRedux(
    <ServicesPage />
  );

  await wait(() => getAllByTestId('Service'));

  expect(queryByTestId('BtnDeleteDoc')).toBeNull();
});
