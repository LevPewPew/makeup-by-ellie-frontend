import React from 'react';
import '@testing-library/jest-dom';
import {cleanup, fireEvent, render} from '@testing-library/react';
import Question from './Question';
import { renderWithRedux } from '../../utils/testing/redux';

afterEach(cleanup);


test('Button changes the text after click', () => {
  const {getByTestId, getAllByText} = renderWithRedux(
    <Question/>,
  );
  
  const buttonValue = getByTestId('ShowButton');
  expect(buttonValue.textContent).toBe('+');
  
  fireEvent.click(buttonValue);
  expect(buttonValue.textContent).toBe('-');
});
