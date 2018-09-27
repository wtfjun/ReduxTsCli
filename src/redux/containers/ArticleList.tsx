import ArticleList from '../../components/ArticleList/ArticleList';
import * as actions from '../actions';
import { connect } from 'react-redux';

export function mapStateToProps(state: any) {
  return {
    articlesListReducers: state.articlesListReducers
  };
}

export function mapDispatchToProps(dispatch: any) {
  return {
    setArticlesListReducers: (data: any) => dispatch(actions.getArticlesListAction(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);