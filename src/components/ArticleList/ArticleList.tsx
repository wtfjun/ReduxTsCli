import * as React from 'react';
import { Link } from 'react-router-dom';
import PageDsc from '../PageDsc/PageDsc';
import './ArticleList.less';

interface State {
  articlesList: any;
}

export default class ArticleList extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      articlesList: {}
    };
  }

  static getDerivedStateFromProps(props: any, state: any) {
    if (props.articlesListReducers.articlesList !== state.articlesList) {
      return {
        articlesList: props.articlesListReducers.articlesList
      };
    }
    return null;
  }

  componentDidMount() {
    const { setArticlesListReducers } = this.props;
    fetch('https://api.github.com/repos/wtfjun/chenxj-blog/issues')
      .then(response =>
        response.json()
          .then(data => {
            setArticlesListReducers(data);
          })
      );
  }
  render() {
    const { articlesList } = this.state;
    return (
      <div className="article-list main">
        <PageDsc desc="All Articles" />
        {Object.keys(articlesList).map(year =>
          <React.Fragment key={year}>
            <h4 className="article-list-title">
              {year}
            </h4>
            <ul>
              {
                articlesList[year].map((issue: any) =>
                  <li key={issue.number}>
                    <Link to="/Article/5454545">{issue.title}</Link>
                  </li>
                )
              }
            </ul>
          </React.Fragment>
        )}

      </div>
    );
  }
}
