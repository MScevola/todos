import React from 'react';
import { render } from 'react-dom';
import WebFont from 'webfontloader';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { ThemeProvider } from "styled-components";

import './index.scss';

import { SecondaryTheme } from './themes/themes';

const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading() {
    return '';
  },
});

WebFont.load({
  google: {
    families: ['Montserrat:500,600,800', 'sans-serif'],
  },
});

render(
  <ThemeProvider theme={SecondaryTheme}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);
