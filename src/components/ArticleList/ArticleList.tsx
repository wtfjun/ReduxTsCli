import * as React from 'react';
import './ArticleList.less';

export default class ArticleList extends React.Component<any> {
  render() {
    return (
      <div className="article-list main">
        <h4 className="article-list-title">
          2018
        </h4>
        <ul>
          <li>
            <a>Vue Design System</a>
          </li>
          <li>
            <a>Workspace</a>
          </li>
        </ul>
      </div>
    );
  }
}
