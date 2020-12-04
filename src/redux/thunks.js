import { fetchSuggestions } from '../api/wikipedia';
import { onFailure, onSuccess, beginSearch } from './actions';
import { getQuery } from './selectors';

export const doSearch = () => async (dispatch, getState) => {
  try {
    dispatch(beginSearch(true));
    const query = getQuery(getState());
    const result = await fetchSuggestions(query);
    dispatch(onSuccess(result[1]));
  } catch (error) {
    console.log(error);
    dispatch(onFailure());
  }
};

export default { doSearch };
