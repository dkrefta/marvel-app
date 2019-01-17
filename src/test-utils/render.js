/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render as rtlRender } from 'react-testing-library';
// styled-components
import { ThemeProvider } from 'styled-components';
// react-router
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import theme from '../styles/theme';

function render(
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }), ...renderOptions } = {}
) {
  return {
    ...rtlRender(
      <ThemeProvider theme={theme}>
        <Router history={history}>{ui}</Router>
      </ThemeProvider>,
      renderOptions
    ),
    history
  };
}

export default render;
