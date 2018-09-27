import initState from '../store/initState';
export function articlesListReducers(
  state = initState.articlesListReducers,
  action: {
  type: string,
  data: Array<any>
  }) {
  switch (action.type) {
    case 'GET_ARTICLES_LIST_ACTION': {

      // 数据处理，只截取作者为wtfjun的 issues，并且根据年份分类
      const articlesList = action.data.reduce((yearIssues, issues) => {
        if (issues.user.login === 'wtfjun') {
          const newIssues = {
            title: issues.title,
            created_at: issues.created_at,
            number: issues.number,
            body: issues.body
          };
          const fullYear = new Date(issues.created_at).getFullYear();
          !yearIssues[fullYear] && (yearIssues[fullYear] = []);
          yearIssues[fullYear].push(newIssues);
        }

        return yearIssues;
      }, {});
      return { ...state, articlesList };
    }
  }
  return state;
}