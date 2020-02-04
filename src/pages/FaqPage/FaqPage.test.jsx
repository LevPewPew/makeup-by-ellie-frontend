import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import axiosMock from 'axios'
import {render, waitForElement} from '@testing-library/react';
import FaqPage from './FaqPage'
import { renderWithRedux } from '../../utils/testing/redux'; 

jest.mock('axios')

test('it displays default Questions', () => {
  const { getByTestId } = renderWithRedux(<FaqPage />);
  const questionList = getByTestId('FaqPage');
  expect(questionList.children.length).toBe(2); 
});