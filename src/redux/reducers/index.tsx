import { combineReducers } from 'redux';
import { enthusiasm } from './demo';
import { articlesListReducers } from './articles';
const rootReducer = combineReducers({
  demo: enthusiasm,
  articlesListReducers: articlesListReducers
});

export default rootReducer;