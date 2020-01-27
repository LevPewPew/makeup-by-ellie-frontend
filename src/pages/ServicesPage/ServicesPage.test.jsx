import React from 'react';
import { wait } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { renderWithRedux } from '../../utils/testing/redux';
import ServicesPage from './ServicesPage';
import { SERVICES_DUMMY_DATA } from '../../utils/testing/dummyData';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

beforeEach(() => {
  let mock = new MockAdapter(axios);
  mock.onGet(`${backendUrl}/services`).reply(200, SERVICES_DUMMY_DATA);
});

test('ServicePage document components do NOT have CRUD button components rendered', async () => {
  const { queryByTestId, getAllByTestId } = renderWithRedux(
    <ServicesPage />
  );

  await wait(() => getAllByTestId('Service'));

  expect(queryByTestId('BtnDeleteDoc')).toBeNull();
});
