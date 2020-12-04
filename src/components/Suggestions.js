import React from 'react';
import { CircularProgress, List, ListItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading, getQuery, getSuggestions } from '../redux/selectors';
import { updateQuery } from '../redux/actions';

const Suggestions = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const query = useSelector(getQuery);
  const suggestions = useSelector(getSuggestions);

  return isLoading
    ? <CircularProgress /> : (
      <List>
        {suggestions.map((suggestion) => query !== suggestion && (
        <ListItem
          key={suggestion}
          onClick={() => dispatch(updateQuery(suggestion))}
        >
          {suggestion}
        </ListItem>
        ))}
      </List>
    );
};

export default Suggestions;
