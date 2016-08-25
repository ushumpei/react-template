import { createElement } from 'react';
import { render } from 'react-dom';

import App from './components/App.jsx';

render(
  createElement(App, {}),
  document.getElementById('root')
);
