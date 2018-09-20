import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from './redux/containers/Hello';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);