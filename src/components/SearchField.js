import React from 'react';
import { func, string } from 'prop-types';
import { TextField } from '@material-ui/core';

const SearchField = ({ value, onChange }) => (
  <TextField label="Search" value={value} onChange={onChange} />
);

SearchField.propTypes = {
  onChange: func.isRequired,
  value: string,
};

SearchField.defaultProps = {
  value: '',
};

export default SearchField;
