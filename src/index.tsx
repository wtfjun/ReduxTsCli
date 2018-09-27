import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from './layouts/Header/Header';
import Hello from './redux/containers/Hello';
import Home from './components/Home';
import Archive from './redux/containers/ArticleList';
import Article from './components/Article/Article';
import configureStore from './redux/store/configureStore';
const store = configureStore();

import './global.less';

const RouterPage = () => (
  <Router>
    <React.Fragment>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={Hello} />
      <Route path="/archive" component={Archive} />
      <Route path="/article/:id" component={Article} />
    </React.Fragment>
  </Router>
);
ReactDOM.render(
  <Provider store={store}>
    <RouterPage />
  </Provider>,
  document.getElementById('root') as HTMLElement
);