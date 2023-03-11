import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  SearchbarHeader,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const submitForm = event => {
    event.preventDefault();

    if (value === '') {
      alert('Enter a Search Query!');
      return;
    }

    onSubmit(value);

    setValue('');
  };
  const changeInput = event => {
    let input = event.currentTarget.value;
    setValue(input);
  };
  return (
    <SearchbarHeader>
      <SearchForm onSubmit={submitForm}>
        <SearchFormBtn type="submit">
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormBtn>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={changeInput}
        />
      </SearchForm>
    </SearchbarHeader>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
