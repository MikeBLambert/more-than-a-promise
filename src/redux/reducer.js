import {
  FAILURE, BEGIN_SEARCH, QUERY_UPDATE, SUCCESS,
} from './actionTypes';

const initialState = {
  isLoading: false,
  query: '',
  suggestions: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case QUERY_UPDATE:
      return { ...state, query: payload };
    case BEGIN_SEARCH:
      return { ...state, isLoading: true };
    case SUCCESS:
      return { ...state, suggestions: payload, isLoading: false };
    case FAILURE:
      return { ...state, isLoading: false };
    default:
      return { ...state };
  }
};

export default reducer;
