/* eslint-disable */
import React from 'react';
import { render, cleanup, getByTestId, getByText } from '../../test-utils';
import Button from './ButtonDetails';

afterEach(cleanup);

describe('<Button />', () => {
  it('should render button with children', () => {
    const btnText = 'Foo btn';

    const { getByText } = render(<Button>{btnText}</Button>);

    expect(getByText(btnText)).toBeInTheDocument();
  });
});