import React, { Component } from 'react';
import { SearchbarHeader, SearchForm, SearchFormBtn, SearchFormBtnLabel,SearchFormInput } from './SearchBar.styled';
export class SearchBar extends Component {
  state = {
    value: '',
  };
  submitForm = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.value);

    this.setState({
        value: '',
    })
  }
  changeInput = (event) => {
    let input = event.currentTarget.value;
    this.setState({
      value: input,
  });

  }
  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.submitForm}>
          <SearchFormBtn type="submit">
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.changeInput}
          />
        </SearchForm>
      </SearchbarHeader>
      
    );
  }
}
