import * as constants from '../../constants';


export function incrementEnthusiasm() {
  return {
    type: constants.INCREMENT_ENTHUSIASM
  };
}

export function decrementEnthusiasm() {
  return {
    type: constants.DECREMENT_ENTHUSIASM
  };
}

export function getArticlesListAction(data: any) {
  return {
    type: 'GET_ARTICLES_LIST_ACTION',
    data
  };
}