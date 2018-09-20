import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Hello from './redux/containers/Hello';
import Home from './components/Home';
import configureStore from './redux/store/configureStore';
const store = configureStore();

const RouterPage = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hello">Hello</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={Hello} />
    </div>
  </Router>
);
ReactDOM.render(
  <Provider store={store}>
    <RouterPage />
  </Provider>,
  document.getElementById('root') as HTMLElement
);