/**
  * Use beginSearch() if you want it to work with redux-observable or redux-saga
  * Use doSearch if you want it to work with redux-thunk.
  * redux-observable and redux-saga both listen to your actions and get to work when they
  * hear an action of the type that they're listening for. This is more declarative :-)
  * With redux-thunk, you have to call the thunk directly. It is more imperative :-(
  * Check the middleware in src/redux/index.js to make sure that the right middleware
  * is uncommented. You can have redux-thunk uncommented always, but redux-saga and redux-epic
  * are both listening for same action, so having them both uncommented will lead
  * to duplicate API calls.
*/
import React, { useEffect, useRef } from 'react';
import { BehaviorSubject } from 'rxjs';
import { TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { debounceTime } from 'rxjs/operators';
import { getQuery } from '../redux/selectors';
import { updateQuery, beginSearch } from '../redux/actions';
import { doSearch } from '../redux/thunks';

const SearchField = () => {
  const dispatch = useDispatch();
  const subject = useRef(new BehaviorSubject());
  const query = useSelector(getQuery);

  useEffect(() => {
    if (!query) return;
    // Triggering an event on the observable whenever query changes.
    subject.current.next(query);

    const subscription = subject.current
    // waiting 1 sec before starting the search so that
    // we don't have an api all on every single change.
      .pipe(debounceTime(1000))
      // value is what we passed into .next() a second ago.
      // we only want to search if that value is still the same as what's in the TextField
      .subscribe((value) => {
        if (value === query) {
          dispatch(beginSearch());
          // dispatch(doSearch());
        }
      });

    return () => subscription.unsubscribe();
  }, [query]);

  const handleChange = ({ target: { value } }) => dispatch(updateQuery(value));

  return <TextField id="search-field" label="Search" value={query} onChange={handleChange} />;
};

export default SearchField;
