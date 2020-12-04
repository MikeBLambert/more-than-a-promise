import {
  BEGIN_SEARCH,
  FAILURE, QUERY_UPDATE, SUCCESS,
} from './actionTypes';

export const updateQuery = (query) => ({ type: QUERY_UPDATE, payload: query });

export const beginSearch = () => ({ type: BEGIN_SEARCH });

export const onSuccess = (suggestions) => ({ type: SUCCESS, payload: suggestions });

export const onFailure = () => ({ type: FAILURE });
