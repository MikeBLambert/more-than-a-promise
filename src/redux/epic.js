import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap } from 'rxjs/operators';
import { createWikipediaUrl } from '../api/wikipedia';
import { onSuccess } from './actions';
import { BEGIN_SEARCH } from './actionTypes';
import { getQuery } from './selectors';

const searchEpic = (action$, state$) => action$.pipe(
  ofType(BEGIN_SEARCH),
  mergeMap(() => ajax.getJSON(createWikipediaUrl(getQuery(state$.value))).pipe(
    map((response) => console.log(response) || onSuccess(response[1])),
  )),
);

export default searchEpic;
