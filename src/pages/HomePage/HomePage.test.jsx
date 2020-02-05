import {render,fireEvent} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import HomePage from './HomePage';

test('Homepage renders Profile Header',()=> {
  const {getByText} = render(<HomePage/>);
  const profileText = getByText(/Profile/i);

  expect(profileText).toBeInTheDocument();
})
