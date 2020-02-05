import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import Question from './Question';
import { renderWithRedux } from '../../utils/testing/redux';

afterEach(cleanup);


it('Button changes the text after click', () => {
  const {getByTestId, getAllByText} = renderWithRedux(
    <Question/>,
  );
  
  const buttonValue = getByTestId('ShowButton');
  expect(buttonValue.textContent).toBe('+');
  
  fireEvent.click(buttonValue);
  const displayAnswer = getAllByText(/Answer/i);

  expect(displayAnswer).toBeTruthy();
  expect(buttonValue.textContent).toBe('-');
});
