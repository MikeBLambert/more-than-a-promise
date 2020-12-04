import React from 'react';
import {
  arrayOf, bool, func, string,
} from 'prop-types';
import { CircularProgress, List, ListItem } from '@material-ui/core';

const Suggestions = ({
  isLoading, query, suggestions, onClick,
}) => (isLoading
  ? <CircularProgress /> : (
    <List>
      {suggestions.map((suggestion) => query !== suggestion && (
        <ListItem
          key={suggestion}
          onClick={() => onClick(suggestion)}
        >
          {suggestion}
        </ListItem>
      ))}
    </List>
  ));

Suggestions.propTypes = {
  isLoading: bool,
  onClick: func.isRequired,
  query: string,
  suggestions: arrayOf(string),
};

Suggestions.defaultProps = {
  isLoading: false,
  query: '',
  suggestions: [],
};

export default Suggestions;
