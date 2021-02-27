import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import '~/assets/scss/main.scss';

import App from './App';

ReactDOM.render(
  <RecoilRoot>
    <App/>
  </RecoilRoot>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) import.meta.hot.accept();
